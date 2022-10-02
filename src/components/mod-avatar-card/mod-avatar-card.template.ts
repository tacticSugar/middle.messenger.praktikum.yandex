export const modAvatarCardTemplate = `
.mod-avatar-card
    .mod-avatar-card__title
      != heading
      form(class="mod-avatar-card__form")
        != newAvatar
        != changeAvatar`;
