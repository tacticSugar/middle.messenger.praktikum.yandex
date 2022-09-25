import { inputAttributes, mainClass } from './text-field-consts';

export class TextField extends Block<TextFieldProps> {
  constructor(props: TextFieldProps) {
    super('div', props);
  }

  render() {
    const { type, placeholder, name, autocomplete, withSpellcheck } = this.props;

    return this.compile(textFieldTemplate, {
      inputAttributes,
      mainClass,
    });
  }
}
const buttonProps: ButtonProps = {
  withArrow: true,
  type: 'submit',
};
const button = new Button(buttonProps);

renderDOM('#app', button);
