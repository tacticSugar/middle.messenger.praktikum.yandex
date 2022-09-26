import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { ChatProps } from './chat-types';
import { chatTemplate } from './chat.template';
import { Avatar } from '../avatar/avatar';

import './chat.scss';
import avatarimg from '../avatar/imgs/avatar.jpg';

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  render() {
    const { avatar, chatName } = this.props;
    return this.compile(chatTemplate, { avatar, chatName });
  }
}

const chatProps: ChatProps = {
  chatName: 'VovaZzxzxzx',
  avatar: new Avatar({
    img: avatarimg,
    name: 'Vova',
    inProfile: true,
  }),
};

const chat = new Chat(chatProps);

renderDOM('#app', chat);
