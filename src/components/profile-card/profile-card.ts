import { profileCardTemplate } from './profile-card.template';
import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';

export class ProfileCard extends Block<ProfileCardProps> {
  constructor(props: ProfileCardProps) {
    super('div', props);
  }

  render() {
    const { login, nickname, name, surname, telephone, changeData, changePassword, exit, testAva } =
      this.props;
    return this.compile(profileCardTemplate, {
      login,
      nickname,
      name,
      surname,
      telephone,
      changeData,
      changePassword,
      exit,
      testAva,
    });
  }
}

const profileCardProps: ProfileCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(profileCardProps);

renderDOM('#app', test);
