const express = require('express');
const {createUser, fetchUser} = require('../controller/Auth');

const router = express.Router();
router.post('/signup',createUser)
      .get('/:id',fetchUser);

console.log("in routes");
module.exports = router;