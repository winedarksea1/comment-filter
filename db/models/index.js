'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Comment = require('./comments');

OAuth.belongsTo(User)
User.hasOne(OAuth)
User.hasMany(Comment);
Comment.belongsTo(User);
module.exports = {User, Comment}
