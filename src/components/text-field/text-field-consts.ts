export const mainClass = 'text-field__input' as const;

export const inputAttributes = {
  class: [mainClass, inputPointerTypeClass],
  type: type,
  name: name,
  autocomplete: autocomplete,
  placeholder: placeholder,
  spellcheck: withSpellcheck,
};
