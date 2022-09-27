import { Block } from '../../utils/core/Block';
import { registrationCardTemplate } from './registration-card.template';
import { RegistrationCardProps } from './registration-card-types';
import './registration-card.scss';

export class RegistrationCard extends Block<RegistrationCardProps> {
  constructor(props: RegistrationCardProps) {
    super('div', props);
  }

  render() {
    const {
      regHeading,
      regEmail,
      regNickname,
      regName,
      regSurname,
      regTelephone,
      regPassword,
      regPasswordAgain,
      regBtnSubmit,
      regBtnEnter,
    } = this.props;
    return this.compile(registrationCardTemplate, {
      regEmail,
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
