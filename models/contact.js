const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Contact = new Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Contact', Contact);