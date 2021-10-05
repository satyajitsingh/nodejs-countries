'use strict'


module.exports = (req, res) => {
  

    
  const ctrList = require('../../common/services/getCountries')
  ctrList.get()

        .then(response => {
            res.render('app/register/index.njk', { countries: response })
        }).catch(err => {
            res.render('app/register/index.njkr', { countries: [] })
        })

}
