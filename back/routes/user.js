const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', auth, userCtrl.deleteUser);
router.put('/:id', auth, multer, userCtrl.modifyUser);
router.put('/password/:id', auth, userCtrl.modifyUserPassword);
router.get('/:id', auth, userCtrl.getOneUser);

module.exports = router;