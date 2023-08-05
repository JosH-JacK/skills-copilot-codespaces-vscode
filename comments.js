// Create web server 
//     to handle HTTP requests
//     to handle REST API requests
//     to handle CRUD requests
//     to handle HTTP responses

// Load modules
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var commentService = require('../services/commentService');
var Comment = require('../models/comment');
var mongoose = require('mongoose');

// GET /comments
router.get('/', function(req, res, next) {
  //res.send('GET /comments');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// GET /comments/list
router.get('/list', function(req, res, next) {
  //res.send('GET /comments/list');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// GET /comments/new
router.get('/new', function(req, res, next) {
  //res.send('GET /comments/new');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// GET /comments/edit
router.get('/edit', function(req, res, next) {
  //res.send('GET /comments/edit');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// GET /comments/delete
router.get('/delete', function(req, res, next) {
  //res.send('GET /comments/delete');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// GET /comments/:id
router.get('/:id', function(req, res, next) {
  //res.send('GET /comments/:id');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// POST /comments
router.post('/', function(req, res, next) {
  //res.send('POST /comments');
  //res.sendFile(path.join(__dirname, '../public', 'comments.html'));
  res.render('comments', { title: 'Comments' });
});

// PUT /comments/:id