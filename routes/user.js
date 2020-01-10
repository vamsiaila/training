const router = require('express').Router();
const userController = require('../controllers/users.controller');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserByUserId);

module.exports = router;