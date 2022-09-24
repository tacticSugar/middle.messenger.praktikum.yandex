import { colorModifiers } from './button-consts';
import { ButtonAttributes, ButtonProps } from './button-types';

export function computeButtonTag(link?: string) {
  if (typeof link === 'string') return 'a';
  return 'button';
}

export function computeButtonAttributes({ link, buttonStyle }: Partial<ButtonProps>) {
  const buttonTag = computeButtonTag(link);
  const buttonAttributes: ButtonAttributes = {
    a: {
      class: ['button', colorModifiers.link],
      href: `./${link}.pug`,
    },
    button: {
      class: ['button', colorModifiers[buttonStyle]],
    },
  };
  return buttonAttributes[buttonTag];
}
