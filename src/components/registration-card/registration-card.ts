import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { registrationCardTemplate } from './registration-card.template';

export class RegistrationCard extends Block<RegistrationCardProps> {
  constructor(props: RegistrationCardProps) {
    super('div', props);
  }

  render() {
    const {
      regLogin,
      regNickname,
      regName,
      regSurname,
      regTelephone,
      regPassword,
      regPasswordAgain,
      regBtnSubmit,
      regBtnEnter,
      regHeading,
    } = this.props;
    return this.compile(registrationCardTemplate, {
      regLogin,
      regNickname,
      regName,
      regSurname,
      regTelephone,
      regPassword,
      regPasswordAgain,
      regBtnSubmit,
      regBtnEnter,
      regHeading,
    });
  }
}

const profileCardProps: RegistrationCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(profileCardProps);

renderDOM('#app', test);
