import { Block } from '../../utils/core/Block';
import { AvatarProps } from '../avatar/avatar-types';
import { HeadingProps } from '../heading/heading-types';

export type ChatProps = {
  // events?: Record<string, any>;
  avatar: Block<AvatarProps>;
  heading: Block<HeadingProps>;
};
