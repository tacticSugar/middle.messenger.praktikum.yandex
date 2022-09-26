import avatarimg from '../avatar/imgs/avatar.jpg';
import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { ChatListProps } from './chat-list-types';
import { chatListTemplate } from './chat-list.template';
import { Avatar } from '../avatar/avatar';
import { Button } from '../button/button';
import { Chat } from '../chat/chat';
import { TextField } from '../text-field/text-field';
import './chat-list.scss';

export class ChatList extends Block<ChatListProps> {
  constructor(props: ChatListProps) {
    super('div', props);
  }

  render() {
    const { chat, button, search } = this.props;
    return this.compile(chatListTemplate, { chat, button, search });
  }
}

const chatListProps = {
  chat: new Chat({
    avatar: new Avatar({
      img: avatarimg,
      name: 'Vova',
      inProfile: false,
    }),
  }),
  button: new Button({
    innerText: 'профиль',
    buttonStyle: 'gray',
    type: 'button',
  }),
  search: new TextField({
    placeholder: 'Поиск',
    type: 'text',
    name: 'search',
  }),
};

const chatList = new ChatList(chatListProps);

renderDOM('#app', chatList);
