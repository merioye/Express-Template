const { Router } = require('express');
const { AuthController } = require('../controllers');

const router = Router();
const authController = new AuthController();

router.post('/register', authController.register);

module.exports = router;
