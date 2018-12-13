/** 入力済みかチェック
 * @param {string} value input value
 * @returns {boolean} result
 * */
export function validateEntered(value) {
  const regex = /^\s*$/
  return ! (
    typeof value === 'undefined' ||
    value === null ||
    value.length <= 0 ||
    regex.test(value)
  )
}
