const router = require('express').Router();
const userController = require('../controllers/users.controller');

router.post('/signUp', userController.signUp);
router.post('/login');
router.get('/:userId', userController.getUserByUserId);
router.put('/:userId', userController.updateUser);

module.exports = router;