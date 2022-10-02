import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { modAvatarCardTemplate } from './mod-avatar-card.template';

export class ModAvatarCard extends Block<ModAvatarCardProps> {
  constructor(props: ModAvatarCardProps) {
    super('div', props);
  }

  render() {
    const { heading, newAvatar, changeAvatar } = this.props;
    return this.compile(modAvatarCardTemplate, { heading, newAvatar, changeAvatar });
  }
}

const test = new LoginCard(loginCardProps);

renderDOM('#app', test);
