// 数値
export function validateNumber(value) {
  const regex = /^(-)?[0-9]*$/
  return regex.test(value)
}

export function validateNumberRange(value, min, max) {
  const num = parseInt(value)
  if (isNaN(num)) {
    return true // 未入力はOK
  }
  if (max !== undefined && isNaN(max) === false) {
    if (max < num) return false //最大値以下
  }
  if (min !== undefined && isNaN(min) === false) {
    if (num < min) return false //最小値以下
  }
  return true
}
