export default function isValidPassword(val: string) {
  if (val === '') {
    return { error: true, errorText: 'поле не должно быть пустым' };
  } else if (val.length > 20 || val.length < 6) {
    return { error: true, errorText: 'от 6 до 20 символов' };
  } else if (!/[A-ZА-Я]/.test(val)) {
    return {
      error: true,
      errorText: 'должна быть хотя бы одна заглавная буква',
    };
  } else if (!/\d/.test(val)) {
    return { error: true, errorText: 'должна быть хотя бы одна цифра' };
  } else return { error: false, errorText: '' };
}
