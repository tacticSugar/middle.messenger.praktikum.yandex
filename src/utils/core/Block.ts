import { EventBus } from './EventBus';
import { v4 as makeUUID } from 'uuid';
import { compile as pugCompile } from 'pug';

type BlockProps = {
  withInternalID?: boolean;
  [key: string]: any;
};

type Children = {
  [key: string]: Block<BlockProps>;
};

const Events = {
  INIT: 'init',
  FLOW_CDM: 'flow:component-did-mount',
  FLOW_CDU: 'flow:component-did-update',
  FLOW_RENDER: 'flow:render',
} as const;

export class Block<TProps extends BlockProps = {}> {
  protected _element: HTMLElement | undefined;
  protected _meta;
  protected eventBus: Function;
  public props: Record<string, any>;
  protected children: Children;
  public id: string;

  constructor(tagName: string = 'div', propsAndChildren: TProps) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._meta = {
      tagName,
      props,
    };

    this.id = makeUUID();
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Events.INIT, {});
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Events.INIT, this.init.bind(this));
    eventBus.on(Events.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Events.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Events.FLOW_RENDER, this._render.bind(this));
  }

  // создаём _element и эмитим FLOW_RENDER
  init() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
    this.eventBus().emit(Events.FLOW_RENDER);
  }

  // поднимаем себя и всех детей
  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });

    this.eventBus().emit(Events.FLOW_RENDER);
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Events.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: TProps, newProps: TProps) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
    this.eventBus().emit(Events.FLOW_CDM, {});
    this.constantsActions();
  };

  constantsActions() {}

  get element() {
    return this._element;
  }

  // обновляем события + рендерим элемент заново
  private _render() {
    const block = this.render(); // render теперь возвращает DocumentFragment
    this._delEvents();

    const newElement = (block as unknown as HTMLElement).firstElementChild;
    if (!newElement) {
      return;
    }
    this.getContent().replaceWith(newElement);
    (this._element as Element) = newElement;
    this._addEvents();
  }

  // переопределить у детей
  render(): string | DocumentFragment | undefined {
    return '';
  }

  getContent() {
    return this.element as HTMLElement;
  }

  private _makePropsProxy(props: Record<string, any>) {
    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        const oldProps = { ...target };
        target[prop] = value;

        this.eventBus().emit(Events.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  protected _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    if (this.props.withInternalID === true) {
      element.setAttribute('data-id', this.id);
    }
    return element;
  }

  show(): void {
    this.getContent().style.display = 'flex'; // block по умолчанию
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }

  // работа с событиями
  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this.getContent().addEventListener(eventName, events[eventName]);
    });
  }

  private _delEvents() {
    let { events } = this.props;
    events = events || {};
    Object.keys(events).forEach((eventName) => {
      this.getContent().removeEventListener(eventName, events[eventName]);
    });
  }

  /**
   * Identify children by instanceof Block
   */
  private _getChildren(incomingObject: TProps) {
    const children: Record<string, Block> = {};
    const props: Record<string, any> = {};

    Object.entries(incomingObject).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  /**
   * Compile with pug
   */
  compile(template: string, props: Record<string, any>) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      const compiledChild = pugCompile(`div(data-id="${child.id}")`)();
      propsAndStubs[key] = compiledChild;
    });

    const fragment = this._createDocumentElement('template');

    if (!(fragment instanceof HTMLTemplateElement)) return;

    fragment.innerHTML = pugCompile(template)(propsAndStubs);

    if (fragment) {
      Object.values(this.children).forEach((child) => {
        const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);

        if (stub) {
          stub.replaceWith(child.getContent());
        }
      });
    }

    return fragment.content;
  }
}
