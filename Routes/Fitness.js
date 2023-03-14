const express = require('express')
const fitnessapi = require("../Api/Fitness api")

const fitness = express.Router()
fitness.route("/fitness").get(fitnessapi.apicontroller);

module.exports = fitness;
