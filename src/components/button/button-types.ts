import { colorModifiers } from './button-consts';

type ColorModifiersKeys = keyof typeof colorModifiers;

export type ButtonProps = {
  // events?: Record<string, any>;
  innerText?: string;
  buttonStyle: ColorModifiersKeys;
  link?: string;
  type?: 'button' | 'reset' | 'submit';
  withArrow?: boolean;
};

export type ButtonAttribute = {
  class: string[];
  href?: string;
};

export type ButtonAttributes = {
  a: ButtonAttribute;
  button: ButtonAttribute;
};
