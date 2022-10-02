export const loginCardTemplate = `
.login-card
  .login-card__container
    != logHeading
    form(class="login-card__form")
      section.login-card__details
        != logNickname
        != logPassword
        != logBtnAuth
        != logBtnNoacc`;
