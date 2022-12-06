import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';

import { TextField } from '../../components/text-field/text-field';
import { Button } from '../../components/button/button';
import { Avatar } from '../../components/avatar/avatar';
import { ProfileCard } from '../../components/profile-card/profile-card';

import { profilePageTemplate } from './profile-page.template';

import avatarimg from '../../components/avatar/imgs/avatar.jpg';

export class ProfilePage extends Block {
  constructor(props: LoginPageProps) {
    super('div', props);
  }

  render() {
    const { profileCard } = this.props;
    return this.compile(profilePageTemplate, { profileCard });
  }
}

const profilePageProps: ProfilePageProps = {
  profileCard: new ProfileCard({
    testAva: new Avatar({
      imgSrc: avatarimg,
      name: 'Vova',
      inProfile: true,
    }),
    email: new TextField({
      placeholder: 'test@ya.ru',
      type: 'email',
      name: 'email',
      autocomplete: 'on',
      disabled: true,
    }),
    nickname: new TextField({
      placeholder: 'Login',
      type: 'text',
      name: 'login',
      autocomplete: 'on',
      disabled: true,
    }),
    name: new TextField({
      placeholder: 'Владимир',
      type: 'text',
      name: 'name',
      autocomplete: 'on',
      disabled: true,
    }),
    surname: new TextField({
      placeholder: 'Балаян',
      type: 'text',
      name: 'surname',
      autocomplete: 'on',
      disabled: true,
    }),
    telephone: new TextField({
      placeholder: '+79999999999',
      type: 'text',
      name: 'telephone',
      autocomplete: 'on',
      disabled: true,
    }),
    btnChangeData: new Button({
      innerText: 'Изменить данные',
      type: 'submit',
      buttonStyle: 'gray',
    }),
    btnChangePassword: new Button({
      innerText: 'Изменить пароль',
      buttonStyle: 'gray',
      link: '../login-page/index.pug',
    }),
    btnExit: new Button({
      innerText: 'Выйти',
      buttonStyle: 'red',
      link: '../login-page/index.pug',
    }),
  }),
};

const profilePage = new ProfilePage(profilePageProps);
renderDOM('#app', profilePage);
