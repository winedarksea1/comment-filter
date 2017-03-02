var express = require('express');
var router = express.Router();
var Comment = require('../db/models/comments');

router.get('/', function (req, res, next) {
  Comment.findAll()
  .then(comments => res.json(comments))
  .catch(next);
});

module.exports = router;
