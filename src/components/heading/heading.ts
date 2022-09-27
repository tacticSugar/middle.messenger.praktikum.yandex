import { Block } from '../../utils/core/Block';
import { HeadingProps } from './heading-types';
import { headingTemplate } from './heading.template';
import './heading.scss';

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
