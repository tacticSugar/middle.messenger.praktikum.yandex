import { Block } from '../../utils/core/Block';
import { ChatListProps } from './chat-list-types';
import { chatListTemplate } from './chat-list.template';
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
