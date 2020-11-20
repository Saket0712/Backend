var mongoose = require('mongoose');
var callApi = mongoose.Schema({

    phone: Number
})

module.exports = mongoose.model('CallApi', callApi);