export const loginCardTemplate = `
.login-card
  .login-card__title
    != heading
    form(class="login-card__form")
      section.login-card__details
        .login-card__login-details_type_nickname
          != nickname
        .login-card__login-details_type_password
          != password
        != auth
        != noacc`;
