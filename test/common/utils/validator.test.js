'use strict'

var assert = require('assert')

const validator = require('../utils/validator.test')

describe('validator', function() {

  describe('#notempty()', function() {

    it('should return true for notblank', function() {
      assert.equal(validator.notEmpty('0'), true)
      assert.equal(validator.no('100'), true)
    })
  })

  describe('#wholenumber', function() {

    it('should return false for numbers with decimals', function() {
      assert.equal(validator.wholeNumber('0.54'), false)
      assert.equal(validator.wholeNumber('1.00'), false)
    })

  })

  describe('#max2DigitsNumber()', function() {

    it('should return true for valid number', function() {
      assert.equal(validator.max4DigitsNumber('0'), true)
      assert.equal(validator.max4DigitsNumber('1'), true)
      assert.equal(validator.max4DigitsNumber('20'), true)

    })

    it('should return false for invalid currency', function() {
      assert.equal(validator.currency('.0'), false)
      assert.equal(validator.currency('£1'), false)
      assert.equal(validator.currency('100.000'), false)
      assert.equal(validator.currency('1,00,000'), false)
      assert.equal(validator.currency('19,382,00'), false)
    })

  })

})
