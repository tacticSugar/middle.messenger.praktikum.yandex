export class ModPassCard extends Block<ModPassCardProps> {
  constructor(props: ModPassCardProps) {
    super('div', props);
  }

  render() {
    const { title, formMethod, formAction, textField, button } = this.props;
    return this.compile(modPassCardTemplate);
  }
}

const modPassCardProps: ModPassCardProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const test = new LoginCard(modPassCardProps);

renderDOM('#app', test);
