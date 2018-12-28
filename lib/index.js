import {validateEmail as email, validateEmailFormat as emailFormat} from './rules/email'
import {validateEntered as entered} from './rules/entered'
import {validateNumber as number, validateNumberRange as numberRange} from './rules/number'
import {validateTel as tel} from './rules/tel'
import {validateUrl as url} from './rules/url'
import {validateZipcode as zipcode} from './rules/zipcode'

export {
  email,
  emailFormat,
  entered,
  number,
  numberRange,
  tel,
  url,
  zipcode,
}
