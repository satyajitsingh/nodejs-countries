// Node.js core dependencies
const path = require('path')

const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const nunjucks  = require('nunjucks');

const router = require('./app/router')

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


router.bind(app)


//models
const dataModel = require("./common/models/userCountryModel");


app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());
app.use("/static,", express.static("public"));
// middleware
app.use(express.json());
app.use(express.urlencoded());

// Define app views
const APP_VIEWS = [
    path.join(__dirname, '/govuk_modules/govuk_template/views/layouts'),
    __dirname
  ]

const nunjucksConfiguration = {
    express: app, // The express app that nunjucks should install to
    throwOnUndefined: false, // Throw errors when outputting a null/undefined value
    trimBlocks: true, // Automatically remove trailing newlines from a block/tag
  }
  // Initialise nunjucks environment
  const nunjucksEnv = nunjucks.configure(APP_VIEWS, nunjucksConfiguration)

nunjucksEnv.addFilter('dateFormat', function (datetime)  {
    return moment(datetime, DATE_PATTERN).format(DATE_FORMAT);
});

//connection to db

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log("Connected to db!");
app.listen(3000, () => console.log("Server Up and running"));
});

app.set("view engine", "njk");