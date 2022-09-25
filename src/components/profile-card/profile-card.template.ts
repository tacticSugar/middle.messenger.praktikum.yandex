export const modPassCardTemplate = `
.profile-card
  .profile-card__title
    +avatar(avatar.testAva)
    form(
      class="profile-card__form"
      method=`${formMethod}`,
      action=`./${formAction}.html`
    )
      section.profile-card__details
        //- .profile-card__login-details_type_email
        +text-field(textField.login)
        //- .profile-card__login-details_type_nickname
        +text-field(textField.nickname)
        //- .profile-card__details_type_name
        +text-field(textField.name)
        //- .profile-card__details_type_surname
        +text-field(textField.surname)
        //- .profile-card__details_type_telephone
        +text-field(textField.telephone)
        +button(button.changeData)
        +button(button.changePassword)
        +button(button.exit)`;
