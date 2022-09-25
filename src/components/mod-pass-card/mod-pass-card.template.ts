export const modPassCardTemplate = `
.mod-pass-card
  .mod-pass-card__title
    form(
      class="mod-pass-card__form"
      method=`${formMethod}`,
      action=`./${formAction}.html`
    )
      section.mod-pass-card__details
        +text-field(textField.passwordOld)
        +text-field(textField.passwordNew)
        +text-field(textField.passwordNewAgain)
        +button(button.savePassword)`;
