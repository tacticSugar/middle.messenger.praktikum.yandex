import { Block } from '../../utils/core/Block';
import './contact-card.scss';


type ContactCardProps = {
  avatar?: string;
  urlIm: string;
  id: number;
  idChat: number;
};

export class ContactCard extends Block<ContactCardProps> {
  constructor(props: ContactCardProps) {

  }
