const db = require('../models/userCountryModel')
const DB_CONNECT='mongodb+srv://dbuser1:XANSA@123@cluster0.9m3z6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require("mongoose");
mongoose.connect(DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    });


module.exports = {
    save: async function (data) {
        const saveTask = new db({
            content: data
        });
        try {
            await saveTask.save();
           return(true)
            } catch (err) {
            return(err)
            }
        }
    }
