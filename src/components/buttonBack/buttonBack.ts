import './button-back.scss';
import ButtonBackTemplate from './buttonBack.pug';
import { Block } from '../../utils/core/Block';

type ButtonBackProps = {
  events: Record<string, any>;
};

export class ButtonBack extends Block<ButtonBackProps> {
  constructor() {
    super('div', {
      events: {},
    });
  }

  render() {
    return this.compile(ButtonBackTemplate, {});
  }
}
