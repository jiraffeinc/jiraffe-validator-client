/** 郵便番号
 * @param {string} value input value
 * @returns {boolean} result
 * */
export function validateZipcode(value) {
  const regex = /^\d{3}[-]\d{4}$|^\d{7}$/
  return regex.test(value)
}
