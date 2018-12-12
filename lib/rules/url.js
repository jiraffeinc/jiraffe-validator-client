//URL
export function validateUrl(value) {
  const regex = /^\S+:\/\/\S+\.\S+.+$/
  return regex.test(value)
}
