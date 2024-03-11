const express = require('express');
const {createUser, loginUser, checkUser} = require('../controller/Auth');
const passport = require('passport');
const router = express.Router();
router.post('/signup',createUser)
      .post('/login',passport.authenticate('local'),loginUser)
      .get('/check',passport.authenticate('jwt'),checkUser);

console.log("in routes");
module.exports = router;