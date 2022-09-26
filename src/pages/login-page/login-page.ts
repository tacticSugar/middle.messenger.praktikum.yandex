export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super('div', props);
  }

  render() {
    const { chat, button, search } = this.props;
    return this.compile(chatListTemplate, { chat, button, search });
  }
}
