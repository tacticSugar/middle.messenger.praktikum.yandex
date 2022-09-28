import { Block } from '../../utils/core/Block';
import { buttonTemplate } from './button.template';
import { ButtonProps } from './button-types';
import { computeButtonTag, computeButtonAttributes } from './button-helpers';
import { colorModifiers } from './button-consts';
import './button.scss';

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    const tag = computeButtonTag(props.link);
    super(tag, props);
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
