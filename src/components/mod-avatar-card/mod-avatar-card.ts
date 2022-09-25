export class ModAvatarCard extends Block<ModAvatarCardProps> {
  constructor(props: ModAvatarCardProps) {
    super('div', props);
  }

  render() {
    const { title, formMethod, formAction, textField, button } = this.props;
    return this.compile(modAvatarCardTemplate);
  }
}

const modAvatarCardProps: ModAvatarCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(loginCardProps);

renderDOM('#app', test);
