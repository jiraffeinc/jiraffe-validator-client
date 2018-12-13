import expect from 'expect.js'
import {validateTel} from '../../lib/rules/tel'

describe('validateTel', () => {
  const subject = (value) => validateTel(value)

  context('value include hyphen(-)', () => {
    context('9 digits value', () => {
      it('success', () => {
        const value = '1234-5-6789'
        expect(subject(value)).to.ok()
      })
    })

    context('11 digits value', () => {
      it('success', () => {
        const value = '123-4567-8901'
        expect(subject(value)).to.ok()
      })
    })

    context('8 digits value', () => {
      it('fail', () => {
        const value = '123-4-8901'
        expect(subject(value)).not.to.ok()
      })
    })

    context('12 digits value', () => {
      it('fail', () => {
        const value = '1234-4456-8901'
        expect(subject(value)).not.to.ok()
      })
    })

    context('invalid value', () => {
      it('fail', () => {
        const value = 'abc-d12-1343'
        expect(subject(value)).not.to.ok()
      })
    })
  })

  context('value not include hyphen(-)', () => {
    context('9 digits value', () => {
      it('success', () => {
        const value = '123456789'
        expect(subject(value)).to.ok()
      })
    })

    context('11 digits value', () => {
      it('success', () => {
        const value = '12345678901'
        expect(subject(value)).to.ok()
      })
    })

    context('8 digits value', () => {
      it('fail', () => {
        const value = '12348901'
        expect(subject(value)).not.to.ok()
      })
    })

    context('12 digits value', () => {
      it('fail', () => {
        const value = '123444568901'
        expect(subject(value)).not.to.ok()
      })
    })

    context('invalid value', () => {
      it('fail', () => {
        const value = 'abcd121343'
        expect(subject(value)).not.to.ok()
      })
    })

  })
})

