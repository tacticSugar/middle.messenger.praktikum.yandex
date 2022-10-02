export const profileCardTemplate = `
.profile-card
  .profile-card__container
    != testAva
    form(class="profile-card__form")
      section.profile-card__details
        != testAva
        != email
        != nickname
        != name
        != surname
        != telephone
        != btnChangeData
        != btnChangePassword
        != btnExit`;
