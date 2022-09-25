export class RegistrationCard extends Block<RegistrationCardProps> {
  constructor(props: RegistrationCardProps) {
    super('div', props);
  }

  render() {
    const { title, formMethod, formAction, textField, button } = this.props;
    return this.compile(registrationCardTemplate);
  }
}

const profileCardProps: RegistrationCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(profileCardProps);

renderDOM('#app', test);
