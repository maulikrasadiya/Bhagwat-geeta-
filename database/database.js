const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BookName').then(() => {
    console.log("Db Connected");
}).catch((err) => {
    console.log("Errer",err);
})

module.exports = mongoose;