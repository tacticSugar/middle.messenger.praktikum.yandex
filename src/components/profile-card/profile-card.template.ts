export const profileCardTemplate = `
.profile-card
  .profile-card__title
    != testAva
    form(class="profile-card__form")
      section.profile-card__details
        //- .profile-card__login-details_type_email
        != login
        //- .profile-card__login-details_type_nickname
        != nickname
        //- .profile-card__details_type_name
        != name
        //- .profile-card__details_type_surname
        != surname
        //- .profile-card__details_type_telephone
        != telephone
        != changeData
        != changePassword
        != exit`;
