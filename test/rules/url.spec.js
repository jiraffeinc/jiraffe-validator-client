import expect from 'expect.js'
import {validateUrl} from '../../lib/rules/url'

describe('validateNumber', () => {
  const subject = (value) => validateUrl(value)

  context('valid value', () => {
    it('success', () => {
      const value = 'http://example.com'
      expect(subject(value)).to.ok()
    })
  })

  context('invalid value', () => {
    it('fail', () => {
      const value = '124あ'
      expect(subject(value)).not.to.ok()
    })
  })
})
