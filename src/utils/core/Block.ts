import { EventBus } from './EventBus';
import { v4 as makeUUID } from 'uuid';
import { compile } from 'pug';
import ProxyProps from './ProxyProps';

interface IChildren {
  [key: string]: Block<TProps>; // Исправлено после 2 спринта
}

export type TProps = Record<string, any>;

enum Events {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export class Block<TProps extends {}> {
  protected _element: HTMLElement;
  protected _meta;
  protected eventBus: Function;
  public props: TProps;
  protected children: IChildren;
  public id: string | null = null;

  constructor(tagName: string = 'div', propsAndChildren: TProps = {}) {
    const eventBus = new EventBus();

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    this._meta = {
      tagName,
      props,
    };

    this.id = makeUUID();
    this.props = ProxyProps({ ...props, id: this.id });

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

  init() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName) as HTMLElement;
    this.eventBus().emit(Events.FLOW_RENDER);
  }

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
    this.eventBus().emit(Events.FLOW_CDM);
    this.constantsActions();
  };

  constantsActions() {}

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    this._delEvents();

    const newElement = (block as unknown as HTMLElement).firstElementChild;
    if (!newElement) {
      return;
    }
    this._element.replaceWith(newElement);
    (this._element as Element) = newElement;
    this._addEvents();
  }

  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  private _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    if (this.props['withInternalID'] === true) {
      if (!this.id) {
        return;
      }
      element.setAttribute('data-id', this.id);
    }
    return element;
  }

  show() {
    this.getContent().style.display = 'flex';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _delEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _getChildren(propsAndChildren: TProps) {
    const children: Record<string, any> = {};
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template: string, props: TProps) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = compile(`div(data-id="${child.id}")`)();
    });

    const fragment = this._createDocumentElement('template');

    if (!fragment) {
      return;
    }
    fragment.innerHTML = compile(template)(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = (fragment as any).content.querySelector(`[data-id="${child.id}"]`);
      stub.replaceWith(child.getContent());
    });
    return (fragment as any).content;
  }
}
