const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');

const Contact = require('../models/contact');

const contactRouter = express.Router();


contactRouter.use(bodyParser.json());

contactRouter.route('/')
    .get((req,res,next) => {
        Contact.find({}).sort({ uploaded: -1 })
        .then((contact) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(contact);
        }, (err) => next(err))
        .catch((err) => next(err));
    })

    .post((req,res,next) => {
        Contact.create(req.body)
        .then((contact) => {
            console.log('Contact message created ', contact);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(contact);
        }, (err) => next(err))
        .catch((err) => next(err));
    })

module.exports = contactRouter;