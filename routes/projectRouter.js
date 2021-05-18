const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const Projects = require('../models/project');
var multer  = require('multer');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const projectRouter = express.Router();

cloudinary.config({
    cloud_name: "dxafyscto",
    api_key: "451661325394836",
    api_secret: "dv3vflHwYi8u6o8eUelZ_L6z9-Q",
  });

projectRouter.use(bodyParser.json());

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'files',
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      if(file.mimetype === 'audio/mpeg') {
        filetype = '.mp3';
      }
      if(file.mimetype === 'video/mp4') {
        filetype = '.mp4';
      }
      if(file.mimetype === 'video/mpeg') {
        filetype = '.mpeg';
      }
      if(file.mimetype === 'application/msword') {
        filetype = '.doc';
      }
      if(file.mimetype === 'text/plain') {
        filetype = '.txt';
      }
      if(file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        filetype = '.docx';
      }
      cb(null, 'file-' + Date.now() + '.' + filetype);
    }
});
var upload = multer({storage: storage});

projectRouter.post('/',authenticate.verifyUser,authenticate.verifyAdmin, upload.single('fileName'), function(req, res, next) {
    if(!req.file) {
        return res.status(500).send({ message: 'Upload fail'});
    } else {
        https://res.cloudinary.com/dxafyscto/image/upload/v1621329299/files/itmqyzda2dx0yh6bslru.jpg
        req.body.fileName = 'https://res.cloudinary.com/dxafyscto/image/upload/v1621329299/' + req.file.filename;
        Projects.create(req.body, function (err, gallery) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(gallery);
        });
    }
});

projectRouter.route('/')
.get((req,res,next) => {
    Projects.find({})
    .then((projects) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(projects);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /projects');
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Projects.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

projectRouter.route('/:projectId')
.get((req,res,next) => {
    Projects.findById(req.params.projectId)
    .populate('comments.author')
    .then((dish) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /projects/'+ req.params.projectId);
})
.put(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Projects.findByIdAndUpdate(req.params.projectId, {
        $set: req.body
    }, { new: true })
    .then((project) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(project);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Projects.findByIdAndRemove(req.params.projectId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

projectRouter.route('/:projectId/comments')
.get((req,res,next) => {
    Projects.findById(req.params.projectId)
    .populate('comments.author')
    .then((project) => {
        if (project != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(project.comments);
        }
        else {
            err = new Error('Project ' + req.params.projectId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser,authenticate.verifyAdmin, upload.single('fileName'), function(req, res, next) {
    if(!req.file) {
        return res.status(500).send({ message: 'Upload fail'});
    } else {
        req.body.fileName = 'https://res.cloudinary.com/dxafyscto/image/upload/v1621329299/' + req.file.filename;
    Projects.findById(req.params.projectId)
    .then((project) => {
        if (project != null) {
            req.body.author = req.user._id;
            project.comments = project.comments.concat(req.body);
            project.save()
            .then((project) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(project);
            }, (err) => next(err));
        }
        else {
            err = new Error('Project ' + req.params.projectId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
}
})
.delete(authenticate.verifyUser,authenticate.verifyAdmin,(req, res, next) => {
    Projects.findById(req.params.projectId)
    .then((project) => {
        if (project != null) {
            for (var i = (project.comments.length -1); i >= 0; i--) {
                project.comments.id(project.comments[i]._id).remove();
            }
            dish.save()
            .then((project) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(project);
            }, (err) => next(err));
        }
        else {
            err = new Error('Project ' + req.params.projectId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

projectRouter.route('/:projectId/comments/:commentId')
.get((req,res,next) => {
    Dishes.findById(req.params.commentId)
    .populate('comments.author')
    .then((project) => {
        if (project != null && project.comments.id(req.params.commentId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(project.comments.id(req.params.commentId));
        }
        else if (dish == null) {
            err = new Error('project ' + req.params.projectId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('project ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = projectRouter;
