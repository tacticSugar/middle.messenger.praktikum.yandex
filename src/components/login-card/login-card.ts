import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { Button } from '../button/button';
import { Heading } from '../heading/heading';
import { TextField } from '../text-field/text-field';
import { LoginCardProps } from './login-card-types';
import { loginCardTemplate } from './login-card.template';
import './login-card.scss';

export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super('div', props);
  }

  render() {
    return this.compile(loginCardTemplate, this.props);
  }
}

const loginCardProps: LoginCardProps = {
  heading: new Heading({
    title: 'Войти',
    level: 'h1',
  }),
  nickname: new TextField({
    placeholder: 'ТестЛогин',
    type: 'password',
    name: 'password',
    autocomplete: 'on',
  }),
  password: new TextField({
    placeholder: 'ТестPassw',
    type: 'password',
    name: 'password',
    autocomplete: 'on',
  }),
  auth: new Button({
    withArrow: true,
    type: 'submit',
  }),
  noacc: new Button({
    withArrow: false,
    type: 'submit',
    innerText: 'HSdsdsd',
    buttonStyle: 'red',
  }),
};

const test = new LoginCard(loginCardProps);

renderDOM('#app', test);
