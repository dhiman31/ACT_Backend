const mongoose = require('mongoose')
const dbUrl = require('../config/serverConfig')

const connection = () => {
    mongoose.connect(dbUrl)
}

module.exports = connection
