import expect from 'expect.js'
import {validateEntered} from '../../lib/rules/entered'

describe('validateEntered', () => {
  const subject = (value) => validateEntered(value)

  context('valide value', () => {
    it('success', () => {
      const value = 'abcdefg'
      expect(subject(value)).to.ok()
    })
  })

  context('empty string', () => {
    it('fail', () => {
      const value = ''
      expect(subject(value)).not.to.ok()
    })
  })

  context('space only', () => {
    it('fail', () => {
      const value = '     '
      expect(subject(value)).not.to.ok()
    })
  })

  context('undefined', () => {
    it('fail', () => {
      const value = undefined
      expect(subject(value)).not.to.ok()
    })
  })

  context('null', () => {
    it('fail', () => {
      const value = null
      expect(subject(value)).not.to.ok()
    })
  })
})
