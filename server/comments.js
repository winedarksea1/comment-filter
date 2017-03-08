var express = require('express');
var router = express.Router();
var Comment = require('../db/models/comments');
var User = require('../db/models/user');

router.get('/', function (req, res, next) {
  Comment.findAll()
  .then(comments => res.json(comments))
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  Comment.findOne({where: {
    comment_id: req.params.id
  }})
  .then(comment => res.json(comment))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Comment.create(req.body)
  //.then(story => story.reload({include: [{model: User, as: 'sender'}]}))
  .then(story => res.status(201).json(story))
  .catch(next);
});

// {
// 	"sender_id": "23432",
//   "comment_id": "10154016990846582_10154019199571565",
// 	"message": "No Wall!!! No Muslim Ban!!!",
// 	"parent_id": "98",
// 	"verb": "add",
// 	"post_id": "22",
// 	"created_time": 32334234
// }

module.exports = router;
