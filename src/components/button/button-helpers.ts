import { colorModifiers } from './button-consts';
import { ButtonAttributes, ButtonProps } from './button-types';

export function computeButtonTag(link?: string) {
  return link ? 'a' : 'button';
}

export function computeButtonAttributes({ link, buttonStyle }: Partial<ButtonProps>) {
  const buttonTag = computeButtonTag(link);
  const buttonAttributes: ButtonAttributes = {
    a: {
      class: ['button', colorModifiers.link],
      href: `./${link}.pug`,
    },
    button: {
      class: ['button'],
    },
  };
  return buttonAttributes[buttonTag];
}
