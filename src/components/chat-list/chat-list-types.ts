import { Block } from '../../utils/core/Block';
import { ButtonProps } from '../button/button-types';
import { ChatProps } from '../chat/chat-types';
import { TextFieldProps } from '../text-field/text-field-types';

export type ChatListProps = {
  // events?: Record<string, any>;
  chat: Block<ChatProps>;
  button: Block<ButtonProps>;
  search: TextFieldProps;
};
