export const chatListTemplate = `
nav.chat-list
    .chat-list__wrapper
      .chat-list__container
        .chat-list__header
          +button(button.profile)
          +text-field(textField.search)
        .chat-list__chats
          +chat({avatar: chat.avatar})
          +chat({avatar: chat.avatar})`;
