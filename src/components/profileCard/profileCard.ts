import { Block } from '../../utils/core/Block';
import './profileCard.scss';
import profileCardTemplate from './profileCard.pug';
import defaultAvaChat from '../../static/img/default-ava-chat.svg';

type ContactCardProps = {
  avatar?: string;
  urlIm: string;
  id: number;
  idChat: number;
};

export class ContactCard extends Block<ContactCardProps> {
  constructor(props: ContactCardProps) {
    if (props.avatar) {
      props.urlIm = 'https://ya-praktikum.tech/api/v2/resources/' + props.avatar;
    } else {
      props.urlIm = defaultAvaChat;
    }

    super('div', {
      ...props,
      idChat: props.id,
    });
  }

  render() {
    return this.compile(profileCardTemplate, {
      ...this.props,
      idCard: this.props.idChat,
    });
  }
}
