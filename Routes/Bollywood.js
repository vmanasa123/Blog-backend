const express = require('express')
const bollywoodapi = require("../Api/Bollywood api")

const bollywood = express.Router()
bollywood.route("/bollywood").get(bollywoodapi.apicontroller);

module.exports = bollywood;