export const modPassCardTemplate = `
.mod-pass-card
  .mod-pass-card__title
    form(class="mod-pass-card__form")
      section.mod-pass-card__details
        != passwordOld
        != passwordNew
        != passwordNewAgain
        != savePassword`;
