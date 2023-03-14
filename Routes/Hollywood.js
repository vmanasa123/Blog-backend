const express = require('express')
const hollywoodapi = require("../Api/Hollywood api")

const hollywood = express.Router()
hollywood.route("/hollywood").get(hollywoodapi.apicontroller);

module.exports = hollywood;