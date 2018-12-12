//入力済み
export function validateEntered(value) {
  const regex = /^\s*$/
  return ! (
    typeof value === 'undefined' ||
    value === null ||
    value.length <= 0 ||
    regex.test(value)
  )
}
