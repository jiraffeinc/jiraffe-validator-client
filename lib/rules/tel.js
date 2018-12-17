/** 電話番号
 * @param {string} value input value
 * @returns {boolean} result
 * */
export function validateTel(value) {
  const regex = /^0(\d{8,10}|\d{1,4}-\d{1,4}-\d{4})$/
  const trimHyphenLength = value.replace(/-/g, '').length
  return regex.test(value) && trimHyphenLength >= 9 && trimHyphenLength <= 11
}
