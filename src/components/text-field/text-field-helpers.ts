export function computeInputAttributes({type, placeholder, name, autocomplete, withSpellcheck}) = {
  const attributes = {
  class: ['text-field__input'],
  type,
  name,
  autocomplete,
  placeholder,
  spellcheck: withSpellcheck,}
  return attributes
}