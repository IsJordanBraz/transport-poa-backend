const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/noderest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;