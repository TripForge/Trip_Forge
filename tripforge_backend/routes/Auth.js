const express = require('express');
const {createUser, fetchUser, loginUser} = require('../controller/Auth');

const router = express.Router();
router.post('/signup',createUser)
      .post('/login',loginUser);

console.log("in routes");
module.exports = router;