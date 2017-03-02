var Sequelize = require('sequelize');
var db = require('APP/db');

var Comment = db.define('comment', {
sender_id: {
  type: Sequelize.BIGINT
},
comment_id: {
  type: Sequelize.STRING,
  primaryKey: true
},
message: {
  type: Sequelize.TEXT
},
parent_id: {
  type: Sequelize.STRING
},
verb: {
  type: Sequelize.STRING
},
post_id: {
  type: Sequelize.STRING
},
// photo:{
// type: Sequelize.STRING
// },
created_time: {
  type: Sequelize.BIGINT
}
});

module.exports = Comment;
