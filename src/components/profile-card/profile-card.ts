import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { profileCardTemplate } from './profile-card.template';
import './profile-card.scss';

export class ProfileCard extends Block<ProfileCardProps> {
  constructor(props: ProfileCardProps) {
    super('div', props);
  }

  render() {
    const {
      testAva,
      email,
      nickname,
      name,
      surname,
      telephone,
      btnChangeData,
      btnChangePassword,
      btnExit,
    } = this.props;
    return this.compile(profileCardTemplate, {
      testAva,
      email,
      nickname,
      name,
      surname,
      telephone,
      btnChangeData,
      btnChangePassword,
      btnExit,
    });
  }
}
