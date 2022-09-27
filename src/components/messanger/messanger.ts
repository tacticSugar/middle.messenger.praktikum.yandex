import { Block } from '../../utils/core/Block';
import { messangerTemplate } from './messanger.template';
import './messanger.scss';

export class Messanger extends Block<MessangerdProps> {
  constructor(props: MessangerProps) {
    super('div', props);
  }

  render() {
    const { testAva, enterMessage, btnSendMessage, heading } = this.props;
    return this.compile(messangerTemplate, {
      testAva,
      heading,
      enterMessage,
      btnSendMessage,
    });
  }
}
