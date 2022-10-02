export const registrationCardTemplate = `
.registration-card
  .registration-card__container
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
