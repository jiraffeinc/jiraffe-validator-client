/** URL
 * @param {string} value input value
 * @returns {boolean} result
 * */
export function validateUrl(value) {
  const regex = /^\S+:\/\/\S+\.\S+.+$/
  return regex.test(value)
}
