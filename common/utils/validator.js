'use strict'

module.exports = {
  notEmpty,

  wholeNumber,

  max2DigitsNumber,
 
  moreThanZero,

  validateChains
}

function notEmpty(value) {
  if (value === undefined) {
    return false
  }
  if (value === null) {
    return false
  }
  if (value === '') {
    return false
  }
  //check for space at start
  if(/^\s/.test(value))
  {
    return false
  }
  //check for only symbols
  if(/^[^a-zA-Z0-9]+$/.test(value)){
    return false
  }
  return true
}


function max2DigitsNumber(value) {
  return (value <= 99)
}


function moreThanZero(value) {
  return (value >0)
}


function wholeNumber(value) {
  const regex = /^((0|[1-9]{1}\d{0,2},(\d{3},)*\d{3})|([1-9]{1}\d{0,}))$/
  return regex.test(value)
}


function validateChains(chains) {
  return new Promise(function(resolve, reject) {
    const failedRules = []
    for (var i = 0; i < chains.length; i++) {
      const rules = chains[i]
      for (var x = 0; x < rules.length; x++) {
        const rule = rules[x]
        if (rule.validator(rule.value) === false) {
          failedRules.push(rule)
          break
        }
      }
    }
    if (failedRules.length === 0) {
      resolve()
    } else {
      reject(failedRules)
    }
  })
}