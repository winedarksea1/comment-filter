var express = require('express');
var router = express.Router();
var Comment = require('../db/models/comments');

router.get('/', function (req, res, next) {
  Comment.findAll()
  .then(comments => res.json(comments))
  .catch(next);
});

router.get('/comment/:id', function (req, res, next) {
  Comment.findOne({where: {
    comment_id: req.params.id
  }})
  .then(comment => res.json(comment))
  .catch(next);
});

module.exports = router;
