import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { LoginCard } from '../../components/login-card/login-card';
import { RegistrationCard } from '../../components/registration-card/registration-card';
import { TextField } from '../../components/text-field/text-field';
import { Button } from '../../components/button/button';
import { Heading } from '../../components/heading/heading';
import { loginPageTemplate } from './login-page.template';
import '../../styles/reset.scss';
import '../../styles/main.scss';
import isValidLogin from '../../utils/helpers/loginField';
import './login-page.scss';
import isValidPassword from '../../utils/helpers/passwordField';

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
      inputCheckType: 'login',
    }),
    logPassword: new TextField({
      placeholder: 'Пароль',
      type: 'password',
      name: 'password',
      autocomplete: 'on',
      inputCheckType: 'password',
    }),
    logBtnAuth: new Button({
      innerText: 'Авторизироваться',
      type: 'submit',
      buttonStyle: 'gray',
    }),
    logBtnNoacc: new Button({
      innerText: 'Нет аккаунта?',
      buttonStyle: 'red',
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
      inputCheckType: 'email',
    }),
    regNickname: new TextField({
      placeholder: 'Логин',
      type: 'text',
      name: 'login',
      autocomplete: 'on',
      inputCheckType: 'login',
    }),
    regName: new TextField({
      placeholder: 'Имя',
      type: 'text',
      name: 'name',
      autocomplete: 'on',
      inputCheckType: 'name',
    }),
    regSurname: new TextField({
      placeholder: 'Фамилия',
      type: 'text',
      name: 'surname',
      autocomplete: 'on',
      inputCheckType: 'name',
    }),
    regTelephone: new TextField({
      placeholder: 'Телефон: +7',
      type: 'text',
      name: 'telephone',
      autocomplete: 'on',
      inputCheckType: 'phone',
    }),
    regPassword: new TextField({
      placeholder: 'Пароль',
      type: 'password',
      name: 'password',
      autocomplete: 'on',
      inputCheckType: 'password',
    }),
    regPasswordAgain: new TextField({
      placeholder: 'Пароль еще раз',
      type: 'password',
      name: 'passwordAgain',
      autocomplete: 'on',
      inputCheckType: 'password',
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
