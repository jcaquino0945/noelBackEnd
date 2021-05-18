const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var commentSchema = new Schema({
    fileName: {
        type: String,
    },
    fileType: {
        type: String,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    /*
    uploaded: { 
        type: Date, 
        default: Date.now,
        required: true
    },
    */
}, {
    timestamps: true
});

var projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    /*
    uploaded: { 
        type: Date, 
        default: Date.now,
        required: true
    },
    */
    comments:[commentSchema]
}, {
    timestamps: true
});

var Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;
