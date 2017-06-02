const db = require('APP/db');
const Comment = require('./models/comments');

var comments = [
  {
    "sender_id": "10210541522126372",
    "comment_id": "10154016990846582_10154019199571532",
    "message": "I heard he's doing a great job and getting more popular.",
    "parent_id": "31989341581_10154016990846582",
    "verb": "add",
    "post_id": "31989341581_10154016990846582",
    "created_time": 1486067430
  },
  {
    "sender_id": "10210541522126373",
    "comment_id": "10154016990846582_10154019199571514",
    "message": "Trump is a coward!!.",
    "parent_id": "31989341581_10154016990846532",
    "verb": "add",
    "post_id": "31989341581_10154016990846534",
    "created_time": 1486067454
  },
  {
    "sender_id": "10210541522126354",
    "comment_id": "10154016990846582_10154019199571565",
    "message": "Let's just move the headquarters of Goldman Sachs into the White House!!",
    "parent_id": "31989341581_10154016990846575",
    "verb": "add",
    "post_id": "31989341581_10154016990846511",
    "created_time": 1486067409
  },
  {
    "sender_id": "10210541522126123",
    "comment_id": "10154016990846582_10154019199574321",
    "message": "Does Jared Kushner ever speak?",
    "parent_id": "31989341581_1015401699011111",
    "verb": "add",
    "post_id": "31989341581_10154016990846490",
    "created_time": 14860676342
  },
  {
    "sender_id": "102105415221260999",
    "comment_id": "10154016990846582_10154019199575943",
    "message": "Make America Great Again",
    "parent_id": "31989341581_1015401699022223",
    "verb": "add",
    "post_id": "31989341581_10154016990860943",
    "created_time": 14860684290
  }
];

const seedComments = () => comments.map(comment => Comment.create(comment));

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedComments)
  .catch(error => console.error(error))
  //.finally(() => db.close())
