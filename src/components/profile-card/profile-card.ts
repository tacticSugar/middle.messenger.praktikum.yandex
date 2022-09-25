export class ProfileCard extends Block<ProfileCardProps> {
  constructor(props: ProfileCardProps) {
    super('div', props);
  }

  render() {
    const { title, formMethod, formAction, textField, button, avatar } = this.props;
    return this.compile(profileCardTemplate);
  }
}

const profileCardProps: ProfileCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(profileCardProps);

renderDOM('#app', test);
