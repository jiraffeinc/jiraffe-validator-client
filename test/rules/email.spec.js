import expect from 'expect.js'
import {validateEmail, validateEmailFormat} from '../../lib/rules/email'

describe('validateEmail', () => {

  context('正常値のとき', () => {
    it('成功', () => {
      const value = 'abcdefg@abcd.com'
      expect(validateEmail(value)).to.ok()
    })
  })

  // context('mailgunで送れないメールアドレスのとき', () => {
  //   it('失敗', () => {
  //     input.value = 'あいうえおabcdefg@abcd.com'
  //     const result = validateInputEmail(input)
  //     const expected = {
  //       isValid: false,
  //       message: 'ご指定のメールアドレスは使用できません',
  //       name: 'example',
  //     }
  //     assert.deepStrictEqual(result, expected)
  //   })
  // })
  //
  // context('ドメインが不正の時', () => {
  //   it('失敗', () => {
  //     input.value = 'abcdefg@abcd'
  //     const result = validateInputEmail(input)
  //     const expected = {
  //       isValid: false,
  //       message: 'ご指定のメールアドレスは使用できません',
  //       name: 'example',
  //     }
  //     assert.deepStrictEqual(result, expected)
  //   })
  // })
  //
  // context('不正値のとき', () => {
  //   it('失敗', () => {
  //     input.value = '123cdcom'
  //     const result = validateInputEmail(input)
  //     const expected = {
  //       isValid: false,
  //       message: 'メールアドレスが不正です',
  //       name: 'example',
  //     }
  //     assert.deepStrictEqual(result, expected)
  //   })
  // })
})
describe('validateEmailFormat', () => {
  context('正常値のとき', () => {
    it('成功', () => {
      const value = 'abcdefg@abcd.com'
      expect(validateEmailFormat(value)).to.ok()
    })
  })
})
