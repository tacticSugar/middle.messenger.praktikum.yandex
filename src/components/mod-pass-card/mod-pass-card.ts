import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { modPassCardTemplate } from './mod-pass-card.template';

export class ModPassCard extends Block<ModPassCardProps> {
  constructor(props: ModPassCardProps) {
    super('div', props);
  }

  render() {
    const { passwordOld, passwordNew, passwordNewAgain, savePassword } = this.props;
    return this.compile(modPassCardTemplate, {
      passwordOld,
      passwordNew,
      passwordNewAgain,
      savePassword,
    });
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
