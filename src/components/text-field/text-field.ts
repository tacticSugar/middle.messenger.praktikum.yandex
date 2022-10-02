import { Block } from '../../utils/core/Block';
import { TextFieldProps } from './text-field-types';
import { textFieldTemplate } from './text-field.template';
import './text-field.scss';
import checkError from '../../utils/helpers/handlerError';

export class TextField extends Block<TextFieldProps> {
  constructor(props: TextFieldProps) {
    super('div', props);

    const el = this.getContent().querySelector('input');
    if (!el) {
      return;
    }
    el.addEventListener('focus', () => {
      const errorElement = this._element.querySelector('p');
      if (!errorElement) {
        return;
      }
      errorElement.style.display = 'none';
    });

    el.addEventListener('blur', () => {
      if (!this.getContent()) {
        return;
      }

      const content = this.getContent().querySelector('input');
      if (!content) {
        return;
      }
      let ans: { errorText: string; error: boolean } = checkError(
        content.value,
        this.props.inputCheckType
      );
      const { error, errorText } = ans;
      if (error) {
        const p = this._element.querySelector('p');
        if (!p) {
          return;
        }
        p.style.display = 'block';
        p.innerText = errorText;
      }
    });
  }

  render() {
    const { type, placeholder, name, autocomplete, withSpellcheck, disabled } = this.props;
    const inputAttributes = {
      class: ['text-field__input'],
      type,
      name,
      autocomplete,
      placeholder,
      spellcheck: withSpellcheck,
      disabled,
    };
    const result = this.compile(textFieldTemplate, { inputAttributes });
    return result;
  }
}
