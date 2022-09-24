import { template as btnTemplate } from './button.template';
import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { computeButtonTag, computeButtonAttributes } from './button-helpers';
import { ButtonProps } from './button-types';
import { colorModifiers } from './button-consts';
import './button.scss';

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    const tag = computeButtonTag(props.link);
    super(tag, props);
  }

  render() {
    const { link, type, innerText, buttonStyle } = this.props;
    const attributes = computeButtonAttributes({ link, buttonStyle });
    const modifier = colorModifiers[buttonStyle];

    return this.compile(btnTemplate, {
      buttonTag: computeButtonTag(link),
      innerText,
      modifier,
      btnAttributes: {
        class: attributes.class,
        href: attributes.href,
        type,
      },
    });
  }
}
const buttonProps: ButtonProps = {
  link: 'hsdsd',
  innerText: 'ggfgfg',
  buttonStyle: 'gray',
};
debugger;
const button = new Button(buttonProps);
console.log('button hello');

renderDOM('#app', button);
