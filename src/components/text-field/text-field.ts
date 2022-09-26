import { Block } from '../../utils/core/Block';
import { renderDOM } from '../../utils/core/renderDOM';
import { TextFieldProps } from './text-field-types';
import { textFieldTemplate } from './text-field.template';
import './text-field.scss';

export class TextField extends Block<TextFieldProps> {
  constructor(props: TextFieldProps) {
    super('div', props);
  }

  render() {
    const { type, placeholder, name, autocomplete, withSpellcheck } = this.props;
    const inputAttributes = {
      class: ['text-field__input'],
      type,
      name,
      autocomplete,
      placeholder,
      spellcheck: withSpellcheck,
    };
    return this.compile(textFieldTemplate, { inputAttributes });
  }
}
const textFieldProps = {
  placeholder: 'Поиск',
  type: 'text',
  name: 'search',
};
const textField = new TextField(textFieldProps);

renderDOM('#app', textField);
