import {validateEmail, validateEmailFormat} from './rules/email'
import {validateEntered} from './rules/entered'
import {validateNumber, validateNumberRange} from './rules/number'
import {validateTel} from './rules/tel'
import {validateUrl} from './rules/url'
import {validateZipcode} from './rules/zipcode'

export default {
  email: validateEmail,
  emailFromat: validateEmailFormat,
  entered: validateEntered,
  number: validateNumber,
  numberRange: validateNumberRange,
  tel: validateTel,
  url: validateUrl,
  zipcode: validateZipcode
}
