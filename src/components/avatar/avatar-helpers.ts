import { AvatarAttribute, AvatarProps } from './avatar-types';

export function computeAvatarAttributes({ inProfile, imgSrc }: Omit<AvatarProps, 'name'>) {
  const sizeMod: string = inProfile ? 'avatar__img_big' : 'avatar__img_small';
  const avatarAttributes: AvatarAttribute = {
    class: ['avatar__img', sizeMod],
    src: imgSrc,
    alt: 'avatar',
  };
  return avatarAttributes;
}
