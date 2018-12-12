//電話
export function validateTel(value) {
  const regex = /^(\d{9,11}|\d{2,5}-\d{1,4}-\d{4})$/
  const trimHyphenLength = value.replace(/-/g, '').length
  return regex.test(value) && trimHyphenLength >= 9 && trimHyphenLength <= 11
}
