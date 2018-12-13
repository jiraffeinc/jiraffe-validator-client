import expect from 'expect.js'
import {validateEmail, validateEmailFormat} from '../../lib/rules/email'

describe('validateEmail', () => {

  context('correct value', () => {
    it('success', () => {
      const value = 'abcdefg@abcd.com'
      expect(validateEmail(value)).to.ok()
    })
  })

  context('invalid value for mailgun', () => {
    it('fail', () => {
      const value = 'あいうえおabcdefg@abcd.com'
      expect(validateEmail(value)).not.to.ok()
    })
  })

  context('invalid domain', () => {
    it('fail', () => {
      const value = 'abcdefg@abcd'
      expect(validateEmail(value)).not.to.ok()
    })
  })

  context('invalid value', () => {
    it('fail', () => {
      const value = '123cdcom'
      expect(validateEmail(value)).not.to.ok()
    })
  })
})

describe('validateEmailFormat', () => {
  context('正常値のとき', () => {
    it('成功', () => {
      const value = 'abcdefg@abcd.com'
      expect(validateEmailFormat(value)).to.ok()
    })
  })

  context('invalid value', () => {
    it('fail', () => {
      const value = '123cdcom'
      expect(validateEmail(value)).not.to.ok()
    })
  })
})
