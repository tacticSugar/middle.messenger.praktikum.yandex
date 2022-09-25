export class Heading extends Block<HeadingProps> {
  constructor(props: HeadingProps) {
    super('div', props);
  }

  render() {
    const { title, level } = this.props;
    const levelMod = `heading__title_level_${level}`;
    return this.compile(headingTemplate);
  }
}

const chatProps: ChatProps = {
  avatar: {
    img: 'avatar2',
    name: 'Vova',
    inProfile: true,
  },
};

const chat = new Chat(chatProps);

renderDOM('#app', chat);
