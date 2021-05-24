const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var commentSchema = new Schema({
    authorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        type:String,
        required: true
    },
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
    uploaded: { 
        type: Date, 
        default: Date.now,
        required: true
    },
}, {
    timestamps: true
});

var projectSchema = new Schema({
    authorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        type:String,
        required: true
    },
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
    uploaded: { 
        type: Date, 
        default: Date.now,
        required: true
    },
    images: {
        type: Number,
        default: 0
    },
    textFiles: {
        type: Number,
        default: 0
    },
    videos: {
        type: Number,
        default: 0
    },
    audio: {
        type: Number,
        default: 0
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

var Projects = mongoose.model('Project', projectSchema);

module.exports = Projects;
