import { Block } from '../../utils/core/Block';
import { ButtonProps } from '../button/button-types';
import { HeadingProps } from '../heading/heading-types';
import { TextFieldProps } from '../text-field/text-field-types';

export type LoginCardProps = {
  // events?: Record<string, any>;
  heading: Block<HeadingProps>;
  textField: Record<string, Block<TextFieldProps>>;
  button: Record<string, Block<ButtonProps>>;
};
