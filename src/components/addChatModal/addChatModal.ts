import { TProps, Block } from '../../utils/core/Block';
import './modal-add-chat.scss';
import linkModal from './addChatModal.pug';
import { Button } from '../button/button';

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string | null;
}

type ModalAddChatProps = {
  btnCreateChat: Button;
  events: Record<string, any>;
};

export class ModalAddChat extends Block<ModalAddChatProps> {
  constructor(props?: TProps) {
    super('div', {
      ...props,
      btnCreateChat: new Button({
        className: 'base-btn',
        btnText: 'сохранить!',
      }),
      events: {},
    });
  }

  render() {
    return this.compile(linkModal, {});
  }
}
