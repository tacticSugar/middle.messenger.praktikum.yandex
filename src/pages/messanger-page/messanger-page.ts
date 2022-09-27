import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { Avatar } from '../../components/avatar/avatar';
import { ChatList } from '../../components/chat-list/chat-list';
import { Messanger } from '../../components/messanger/messanger';
import { Button } from '../../components/button/button';
import { TextField } from '../../components/text-field/text-field';
import { Chat } from '../../components/chat/chat';
import { messangerPageTemplate } from './messanger-page.template';
import avatarimg from '../../components/avatar/imgs/avatar.jpg';
import { Heading } from '../../components/heading/heading';
import './messanger-page.scss';

export class MessangerPage extends Block {
  constructor(props: MessangerPageProps) {
    super('div', props);
  }

  render() {
    const { chatList, messanger } = this.props;
    return this.compile(messangerPageTemplate, { chatList, messanger });
  }
}
const chatName = 'VovaChat';
const messangerPageProps: MessangerPageProps = {
  chatList: new ChatList({
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
    chat: new Chat({
      heading: new Heading({
        title: chatName,
        level: 'h3',
      }),
      avatar: new Avatar({
        img: avatarimg,
        name: 'Vova',
        inProfile: false,
      }),
    }),
  }),
  messanger: new Messanger({
    heading: new Heading({
      title: chatName,
      level: 'h3',
    }),
    testAva: new Avatar({
      img: avatarimg,
      name: 'Vova',
      inProfile: false,
    }),
    enterMessage: new TextField({
      placeholder: 'Введите сообщение',
      type: 'text',
      name: 'enterMessage',
    }),
    btnSendMessage: new Button({
      buttonStyle: 'red',
      withArrow: true,
    }),
  }),
};

const messangerPage = new MessangerPage(messangerPageProps);
renderDOM('#app', messangerPage);
