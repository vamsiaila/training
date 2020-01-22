const router = require('express').Router();
const userController = require('../controllers/users.controller');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserByUserId);
router.post('/', userController.createUser);
router.put('/:userId', userController.updateUser);

module.exports = router;