import { Block } from '../../utils/core/Block';
import { ChatProps } from './chat-types';
import { chatTemplate } from './chat.template';
import './chat.scss';

export class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super('div', props);
  }

  render() {
    const { avatar, heading } = this.props;
    return this.compile(chatTemplate, { avatar, heading });
  }
}
