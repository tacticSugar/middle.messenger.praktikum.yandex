import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { computeAvatarAttributes } from './avatar-helpers';
import { AvatarProps } from './avatar-types';
import { avatarTemplate } from './avatar.template';
import './avatar.scss';

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render() {
    const { img, name, inProfile } = this.props;
    const avatarAttributes = computeAvatarAttributes({ inProfile, img });

    return this.compile(avatarTemplate, {
      name,
      avatarAttributes,
    });
  }
}

// const avatarProps = {
//   img: 'avatar2',
//   name: 'Vova',
//   inProfile: true,
// };

// const avatar = new Avatar(avatarProps);

// renderDOM('#app', avatar);
