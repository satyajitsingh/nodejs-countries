const ValidationRule = require('../../common/models/ValidationRule.class')
const validator = require('../../common/utils/validator')
const ctrList = require('../../common/services/getCountries')

module.exports  = (req, res) => {
    // Get form elements
    var name = req.body['name']
    var age = req.body['age']
    var gender = req.body['gender']
    var country = req.body['country']

    const validationChain = [
		new ValidationRule(validator.notEmpty, 'name', name, 'Please tell us your full name'),
        new ValidationRule(validator.notEmpty, 'age', age, 'Please enter your age'),
        new ValidationRule(validator.notEmpty, 'gender', name, 'Please select your gender'),
        new ValidationRule(validator.notEmpty, 'country', country, 'Please select your Country')
	]

    // Validate chains
	validator.validateChains([validationChain]).then(response => {

		res.render('app/confirm/index', {name: name});
			
	}).catch(err => {
		console.log(err)
        ctrList.get()

            .then(response => {
                res.render('app/register/index.njk', { countries: countryList , errors: err})
            }).catch(err => {
                res.render('app/register/index.njk', { countries: [],  errors: err })
            })

	
})
}