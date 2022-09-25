export class LoginCard extends Block<LoginCardProps> {
  constructor(props: LoginCardProps) {
    super('div', props);
  }

  render() {
    const { title, formMethod, formAction, textField, button } = this.props;
    return this.compile(loginCardTemplate);
  }
}

const loginCardProps: LoginCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(loginCardProps);

renderDOM('#app', test);
