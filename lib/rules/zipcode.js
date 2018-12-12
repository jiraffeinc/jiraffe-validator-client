//郵便番号
export function validateZipcode(value) {
  const regex = /^\d{3}[-]\d{4}$|^\d{7}$/
  return regex.test(value)
}
