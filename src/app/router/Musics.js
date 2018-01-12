var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Music = require('../models/Music.js');

/* GET ALL MUSICS */
router.get('/', function(req, res, next) {
  Music.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE MUSIC BY ID */
router.get('/:id', function(req, res, next) {
  Music.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE MUSIC */
router.post('/', function(req, res, next) {
  Music.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE MUSIC */
router.put('/:id', function(req, res, next) {
  Music.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE MUSIC */
router.delete('/:id', function(req, res, next) {
  Music.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
