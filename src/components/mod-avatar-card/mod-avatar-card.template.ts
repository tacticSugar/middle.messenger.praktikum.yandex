export const modAvatarCardTemplate = `
.mod-avatar-card
    .mod-avatar-card__title
      +heading({title: title, level: "h3"})
      form(
        class="mod-avatar-card__form"
        method=`${formMethod}`,
        action=`./${formAction}.html`
      )
        +text-field(textField.newAvatar)
        +button(button.changeAvatar)`;
