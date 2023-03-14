const express = require('express')
const foodapi = require("../Api/Food api")

const food = express.Router()
food.route("/food").get(foodapi.apicontroller);

module.exports = food;