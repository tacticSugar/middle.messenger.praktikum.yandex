import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { computeHeadingAttributes } from './heading-helpers';
import { HeadingProps } from './heading-types';
import { headingTemplate } from './heading.template';

export class Heading extends Block<HeadingProps> {
  constructor(props: HeadingProps) {
    super('div', props);
  }

  render() {
    const { title, level } = this.props;
    const levelMod: string = `heading__title_level_${level}`;
    return this.compile(headingTemplate, { title, level, levelMod });
  }
}

const headingProps: HeadingProps = {
  title: 'hiQqQQQQQ',
  level: 'h1',
};

const chat = new Heading(headingProps);

renderDOM('#app', chat);
