import { Block } from '../../utils/core/Block';
import './buttonSubmit.scss';
import btnSubTemplate from './buttonSubmit.pug';

type SubmitButtonProps = {
  text: string;
  events: Record<string, any>;
};

export class SubmitButton extends Block<SubmitButtonProps> {
  constructor(props: SubmitButtonProps) {
    super('div', {
      ...props,
    });
  }

  render() {
    return this.compile(btnSubTemplate, {
      textSubBtn: this.props.text,
    });
  }
}
