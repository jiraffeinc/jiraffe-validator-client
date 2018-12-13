import expect from 'expect.js'
import {validateNumber, validateNumberRange} from '../../lib/rules/number'

describe('validateNumber', () => {
  const subject = (value) => validateNumber(value)

  context('valid value', () => {
    it('success', () => {
      const value = '123'
      expect(subject(value)).to.ok()
    })
  })

  context('invalid value', () => {
    it('fail', () => {
      const value = 'abcd123'
      expect(subject(value)).not.to.ok()
    })
  })
})

describe('validateNumberRange', () => {
  const subject = (value, min, max) => validateNumberRange(value, min, max)

  context('valid value', () => {
    it('success', () => {
      const value = '123'
      expect(subject(value, 100, 200)).to.ok()
    })
  })

  context('valid minimum value', () => {
    it('success', () => {
      const value = '100'
      expect(subject(value, 100, 200)).to.ok()
    })
  })

  context('valid maximum value', () => {
    it('success', () => {
      const value = '200'
      expect(subject(value, 100, 200)).to.ok()
    })
  })

  context('invalid min value', () => {
    it('fail', () => {
      const value = '99'
      expect(subject(value, 100, 200)).not.to.ok()
    })
  })

  context('valid max value', () => {
    it('fail', () => {
      const value = '201'
      expect(subject(value, 100, 200)).not.to.ok()
    })
  })
})
