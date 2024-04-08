const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    book : String,
    name : String,
    page : String
});

let userModel = mongoose.model('book',bookSchema);

module.exports = userModel;     