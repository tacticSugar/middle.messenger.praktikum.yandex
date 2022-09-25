export const chatListTemplate = `
.heading
  case level
    when 'h1': h1.heading__title(class=levelMod) #{title}
    when 'h2': h2.heading__title(class=levelMod) #{title}
    when 'h3': h3.heading__title(class=levelMod) #{title}`;
