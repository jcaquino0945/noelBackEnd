const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const nodemailer = require('nodemailer');

const Contact = require('../models/contact');

const contactRouter = express.Router();


contactRouter.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'soapust@gmail.com',
        pass: 'S3CuR1ty!' // naturally, replace both with your real credentials or an application-specific password
    },
    tls: {
      rejectUnauthorized: false //added because of self signed cert chain error //Error: self signed certificate in certificate chain
    },
});

contactRouter.route('/')
    .get((req, res, next) => {
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


contactRouter.route('/:contactId')
    .delete((req, res, next) => {
        Contact.findByIdAndRemove(req.params.contactId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });


    contactRouter.post('/supportReply',(req,res) => {
        const {to, html, subject} = req.body;
        var mailData = {
            from: 'soapust@gmail.com',
            to: to,
            subject: subject,
            html: html
        };
        transporter.sendMail(mailData, function(err, info) {
            if (err) {
                console.log(err);
            } else {
                // see https://nodemailer.com/usage
                console.log("info.messageId: " + info.messageId);
                console.log("info.envelope: " + info.envelope);
                console.log("info.accepted: " + info.accepted);
                console.log("info.rejected: " + info.rejected);
                console.log("info.pending: " + info.pending);
                console.log("info.response: " + info.response);
            }
            transporter.close();
        });
    })



module.exports = contactRouter;