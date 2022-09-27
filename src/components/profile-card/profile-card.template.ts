export const profileCardTemplate = `
.profile-card
  .profile-card__title
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
