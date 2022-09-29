import { Block } from '../../utils/core/Block';
import { buttonTemplate } from './button.template';
import { ButtonProps } from './button-types';
import { computeButtonTag, computeButtonAttributes } from './button-helpers';
import { colorModifiers } from './button-consts';
import './button.scss';

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    const tag = computeButtonTag(props.link);
    super('div', {
      ...props,
      events: {
        click: (event: Event) => {
          event.preventDefault();
          const target = event.target as HTMLElement;
          const form = target.closest('form');
          if (!form) {
            return;
          }
          const pInTemplate: NodeListOf<HTMLParagraphElement> = form.querySelectorAll('.error');
          for (const p of pInTemplate) {
            if (p.style.display !== 'none') {
              console.log('не все данные валидны!');
              return;
            }
          }
          const inputsInTemplate: NodeListOf<HTMLInputElement> =
            form.querySelectorAll('.text-field__input');
          for (const input of inputsInTemplate) {
            console.log(input.value);
          }
        },
      },
    });
  }

  render() {
    const { link, type, innerText, buttonStyle, withArrow } = this.props;
    const modifier = colorModifiers[buttonStyle];
    const buttonAttributes = computeButtonAttributes({ link, buttonStyle });

    return this.compile(buttonTemplate, {
      buttonTag: computeButtonTag(link),
      innerText,
      modifier,
      withArrow,
      btnAttributes: {
        class: buttonAttributes.class,
        href: buttonAttributes.href,
        type,
      },
    });
  }
}
