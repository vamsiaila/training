const router = require('express').Router();
const users = require('./user');
const posts = require('./post');
const comments = require('./comment');

router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);


module.exports = router;