/** mailgunで送信できるメール形式かチェック
 * @param {string} value input value
 * @returns {boolean} result
 * */
export function validateEmail(value) {
  const regex = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-](?!.*(\.\.))[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]|[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/
  return regex.test(value)
}

/** メールアドレスのフォーマットであるかチェック(半角全角などは判定しない)
 * @param {string} value input value
 * @returns {boolean} result
 * */
export function validateEmailFormat(value) {
  const regex = /^.+@.+$/
  return regex.test(value)
}
