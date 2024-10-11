const router = require('express').Router();

const authenticationController = require('../controllers/authentication.controller');

router.post('/signup', authenticationController.signup);

module.exports = router;

//todo: https://notes.app.codegym.com/auth/signup