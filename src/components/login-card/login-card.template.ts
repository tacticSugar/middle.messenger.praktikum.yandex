export const loginCardTemplate = `
.login-card
    .login-card__title
      +heading({title: title, level: "h1"})
      form(
        class="login-card__form"
        method=`${formMethod}`,
        action=`./${formAction}.html`
      )
        section.login-card__details
          .login-card__login-details_type_nickname
            +text-field(textField.nickname)
          .login-card__login-details_type_password
            +text-field(textField.password)
          +button(button.auth)
          +button(button.noacc)`;
