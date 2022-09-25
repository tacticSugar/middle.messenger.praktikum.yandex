import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { ChatProps } from './chat-types';
import { chatTemplate } from './chat.template';
import { Avatar } from '../avatar/avatar';
import './chat.scss';

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  render() {
    const { avatar } = this.props;
    const myAvatar = new Avatar(avatar);
    console.log(myAvatar);
    return this.compile(chatTemplate, myAvatar);
  }
}

const chatProps: ChatProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: false,
  },
};

const chat = new Chat(chatProps);

renderDOM('#app', chat);
