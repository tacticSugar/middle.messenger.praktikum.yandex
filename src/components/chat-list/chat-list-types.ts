import { ButtonProps } from '../button/button-types';
import { ChatProps } from '../chat/chat-types';
import { TextFieldProps } from '../text-field/text-field-types';

export type ChatListProps = {
  // events?: Record<string, any>;
  chat: ChatProps;
  button: ButtonProps;
  search: TextFieldProps;
};
