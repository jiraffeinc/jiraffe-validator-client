//mailgunで送信できるメール形式かチェック
export function validateEmail(value) {
  const regex = /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-](?!.*(\.\.))[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]|[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/
  return regex.test(value)
}

//メールアドレスのフォーマットであるかチェック(半角全角などは判定しない)
export function validateEmailFormat(value) {
  const regex = /^.+@.+$/
  return regex.test(value)
}
