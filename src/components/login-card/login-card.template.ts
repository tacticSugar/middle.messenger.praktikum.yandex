export const loginCardTemplate = `
.login-card
  .login-card__title
    != logHeading
    form(class="login-card__form")
      section.login-card__details
        .login-card__login-details_type_nickname
          != logNickname
        .login-card__login-details_type_password
          != logPassword
        != logBtnAuth
        != logBtnNoacc`;
