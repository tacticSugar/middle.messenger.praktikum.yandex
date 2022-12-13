import { Input } from '../input/input';
import './dialog-field.scss';
import dialogTemplate from './dialog-field.pug';
import { Block } from '../../utils/core/Block';
import { Button } from '../button/button';

type DialogFieldProps = {
  currentChat: number;
  idChat: number;
  dialogChosen: boolean;
  inputMessage: Input;
  btnSendMessage: Button;
};

class DialogField extends Block<DialogFieldProps> {
  constructor(props: DialogFieldProps) {
    super('div', {});
  }

  render() {
    console.log(this.props);
    return this.compile(dialogTemplate, this.props);
  }
}
