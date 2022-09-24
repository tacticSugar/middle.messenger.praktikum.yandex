import { colorModifiers } from './button-consts';

type ColorModifiersKeys = keyof typeof colorModifiers;

export type ButtonProps = {
  // events?: Record<string, any>;
  buttonStyle: ColorModifiersKeys;
  innerText: string;
  link?: string;
  type?: 'button' | 'reset' | 'submit';
};

export type ButtonAttribute = {
  class: string[];
  href?: string;
};

export type ButtonAttributes = {
  a: ButtonAttribute;
  button: ButtonAttribute;
};
