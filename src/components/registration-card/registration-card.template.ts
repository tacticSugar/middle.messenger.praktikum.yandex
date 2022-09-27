export const registrationCardTemplate = `
.registration-card
  .registration-card__title
    != regHeading
    form(class="registration-card__form")
      section.registration-card__details
        != regEmail
        != regNickname
        != regName
        != regSurname
        != regTelephone
        != regPassword
        != regPasswordAgain
        != regBtnSubmit
        != regBtnEnter`;
