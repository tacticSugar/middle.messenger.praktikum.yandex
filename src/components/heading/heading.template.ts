export const headingTemplate = `
.heading
  if level === "h1"
    h1.heading__title(class=levelMod)= title
  else if level === "h2"
    h2.heading__title(class=levelMod)= title
  else if level === "h3"
    h3.heading__title(class=levelMod)= title`;
