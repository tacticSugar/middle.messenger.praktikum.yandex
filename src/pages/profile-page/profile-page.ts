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
      img: avatarimg,
      name: 'Vova',
      inProfile: true,
    }),
    email: new TextField({
      placeholder: 'Почта',
      type: 'email',
      name: 'email',
      autocomplete: 'on',
    }),
    nickname: new TextField({
      placeholder: 'Логин',
      type: 'text',
      name: 'login',
      autocomplete: 'on',
    }),
    name: new TextField({
      placeholder: 'Имя',
      type: 'text',
      name: 'name',
      autocomplete: 'on',
    }),
    surname: new TextField({
      placeholder: 'Фамилия',
      type: 'text',
      name: 'surname',
      autocomplete: 'on',
    }),
    telephone: new TextField({
      placeholder: 'Телефон',
      type: 'text',
      name: 'telephone',
      autocomplete: 'on',
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
