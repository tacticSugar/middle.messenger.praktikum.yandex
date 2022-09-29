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

type ErrorElem = {
  name: 'login' | 'password';
  isError: boolean;
  errorMessage: string;
};

export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super('div', props);
  }

  errors: ErrorElem[] = [];

  loginHandler(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      const { error, errorText } = isValidLogin(value);
      const index = this.errors.findIndex(({ name }) => name === 'login');
      if (error) {
        const errorObj: ErrorElem = { name: 'login', isError: error, errorMessage: errorText };
        if (index >= 0) {
          this.errors[index] = errorObj;
        } else {
          this.errors.push(errorObj);
        }
      } else {
        this.errors = this.errors.filter(({ name }) => name !== 'login');
      }
    }
    console.log(this.errors);
  }

  componentDidMount(): void {
    const page = this.element;
    const login = page?.querySelector('input[name="login"]');
    login?.addEventListener('focus', this.loginHandler.bind(this));
    login?.addEventListener('blur', this.loginHandler.bind(this));
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
      // onFocus: (event) => console.log(isValidLogin(event.target.value)),
      // onBlur: (event) => isValidLogin(event.target.value),
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
