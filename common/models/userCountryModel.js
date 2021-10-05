const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
name: String,
gender: String,
age: String,
country:String
})
module.exports = mongoose.model('User',dataSchema);