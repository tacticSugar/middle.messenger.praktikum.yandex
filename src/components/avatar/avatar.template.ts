export const avatarTemplate = `
mixin avatar()
  .avatar
      .avatar__container
        a.avatar__avatar(href="/#!")
          img&attributes(avatarAttributes)
          if inProfile
            .avatar__mask Изменить аватар
            .avatar__description
              .avatar__name #{name}`;
