import { Block } from '../../utils/core/Block';
import { TextFieldProps } from './text-field-types';
import { textFieldTemplate } from './text-field.template';
import './text-field.scss';

export class TextField extends Block<TextFieldProps> {
  constructor(props: TextFieldProps) {
    super('div', props);
  }

  render() {
    const { type, placeholder, name, autocomplete, withSpellcheck, onFocus, onBlur } = this.props;
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
