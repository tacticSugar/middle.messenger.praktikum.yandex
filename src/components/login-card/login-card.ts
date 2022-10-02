import { Block } from '../../utils/core/Block';
import { LoginCardProps } from './login-card-types';
import { loginCardTemplate } from './login-card.template';
import './login-card.scss';

export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super('div', props);
  }

  render() {
    const { logHeading, logNickname, logPassword, logBtnAuth, logBtnNoacc } = this.props;
    return this.compile(loginCardTemplate, {
      logHeading,
      logNickname,
      logPassword,
      logBtnAuth,
      logBtnNoacc,
    });
  }
}
