export class ChatList extends Block<ChatListProps> {
  constructor(props: ChatListProps) {
    super('div', props);
  }

  render() {
    const { chat, textField, button } = this.props;
    return this.compile(chatListTemplate, );
  }
}

const chatListProps: = {
};

const chatList = new ChatList(chatListProps);

renderDOM('#app', chatList);
