import expect from 'expect.js'
import {validateZipcode} from '../../lib/rules/zipcode'
describe('validateZipcode', () => {
  const subject = (value) => validateZipcode(value)

  context('value include hyphen(-)', () => {
    context('7 digits value', () => {
      it('success', () => {
        const value = '100-0001'
        expect(subject(value)).to.ok()
      })
    })

    context('8 digits value', () => {
      it('fail', () => {
        const value = '1234-5678'
        expect(subject(value)).not.to.ok()
      })
    })

    context('6 digits value', () => {
      it('fail', () => {
        const value = '123456'
        expect(subject(value)).not.to.ok()
      })
    })

    context('multi hyphen', () => {
      it('fail', () => {
        const value = '12-446-81'
        expect(subject(value)).not.to.ok()
      })
    })

    context('double hyphen', () => {
      it('fail', () => {
        const value = '123--4567'
        expect(subject(value)).not.to.ok()
      })
    })

    context('invalid value', () => {
      it('fail', () => {
        const value = 'abc-d123'
        expect(subject(value)).not.to.ok()
      })
    })
  })

  context('value not include hyphen(-)', () => {
    context('7 digits value', () => {
      it('success', () => {
        const value = '1000001'
        expect(subject(value)).to.ok()
      })
    })

    context('8 digits value', () => {
      it('fail', () => {
        const value = '12345678'
        expect(subject(value)).not.to.ok()
      })
    })

    context('6 digits value', () => {
      it('fail', () => {
        const value = '123456'
        expect(subject(value)).not.to.ok()
      })
    })

    context('invalid value', () => {
      it('fail', () => {
        const value = 'abcd123'
        expect(subject(value)).not.to.ok()
      })
    })
  })
})

