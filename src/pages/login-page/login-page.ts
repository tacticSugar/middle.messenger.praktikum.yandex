import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { LoginCard } from '../../components/login-card/login-card';
import { RegistrationCard } from '../../components/registration-card/registration-card';
import { TextField } from '../../components/text-field/text-field';
import { Button } from '../../components/button/button';
import { Heading } from '../../components/heading/heading';
import { loginPageTemplate } from './login-page.template';
import './login-page.scss';

export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super('div', props);
  }

  render() {
    const { loginCard, registrationCard } = this.props;
    return this.compile(loginPageTemplate, { loginCard, registrationCard });
  }
}

const loginPageProps: LoginPageProps = {
  loginCard: new LoginCard({
    logHeading: new Heading({
      title: 'Войти',
      level: 'h1',
    }),
    logNickname: new TextField({
      placeholder: 'Логин',
      type: 'text',
      name: 'login',
      autocomplete: 'off',
    }),
    logPassword: new TextField({
      placeholder: 'Пароль',
      type: 'password',
      name: 'password',
      autocomplete: 'on',
    }),
    logBtnAuth: new Button({
      innerText: 'Авторизироваться',
      type: 'submit',
      buttonStyle: 'gray',
    }),
    logBtnNoacc: new Button({
      innerText: 'Нет аккаунта?',
      buttonStyle: 'gray',
      link: '../registration-page/registration-page',
    }),
  }),
  registrationCard: new RegistrationCard({
    regHeading: new Heading({
      title: 'Регистрация',
      level: 'h1',
    }),
    regEmail: new TextField({
      placeholder: 'Почта',
      type: 'email',
      name: 'email',
      autocomplete: 'on',
    }),
    regNickname: new TextField({
      placeholder: 'Логин',
      type: 'text',
      name: 'login',
      autocomplete: 'on',
    }),
    regName: new TextField({
      placeholder: 'Имя',
      type: 'text',
      name: 'name',
      autocomplete: 'on',
    }),
    regSurname: new TextField({
      placeholder: 'Фамилия',
      type: 'text',
      name: 'surname',
      autocomplete: 'on',
    }),
    regTelephone: new TextField({
      placeholder: 'Телефон',
      type: 'text',
      name: 'telephone',
      autocomplete: 'on',
    }),
    regPassword: new TextField({
      placeholder: 'Пароль',
      type: 'password',
      name: 'password',
      autocomplete: 'on',
    }),
    regPasswordAgain: new TextField({
      placeholder: 'Пароль еще раз',
      type: 'password',
      name: 'password',
      autocomplete: 'on',
    }),
    regBtnSubmit: new Button({
      innerText: 'Зарегистрироваться',
      type: 'submit',
      buttonStyle: 'gray',
    }),
    regBtnEnter: new Button({
      innerText: 'Войти',
      buttonStyle: 'gray',
      link: '../login-page/index.pug',
    }),
  }),
};

const loginPage = new LoginPage(loginPageProps);
renderDOM('#app', loginPage);
