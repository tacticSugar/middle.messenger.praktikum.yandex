import { Block } from '../../utils/core/Block';
import { template as btnTemplate } from './button.template';
import { renderDOM } from '../../utils/core/renderDOM';
import { ButtonProps } from './button-types';
import { colorModifiers } from './button-consts';
import { computeButtonTag, computeButtonAttributes } from './button-helpers';
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

    return this.compile(btnTemplate, {
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
const buttonProps: ButtonProps = {
  withArrow: true,
  type: 'submit',
};
const button = new Button(buttonProps);

renderDOM('#app', button);
