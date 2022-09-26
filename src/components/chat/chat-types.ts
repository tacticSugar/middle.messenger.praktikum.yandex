import { Block, TProps } from '../../utils/core/Block';
import { AvatarProps } from '../avatar/avatar-types';

export type ChatProps = {
  // events?: Record<string, any>;
  avatar: Block<AvatarProps>;
};
