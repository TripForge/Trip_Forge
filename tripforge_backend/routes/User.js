const express = require('express');
// const {createUser, loginUser, checkAuth} = require('../controller/Auth');
const {createUserInfo, getUserInfo} = require('../controller/User')
const router = express.Router();
router.post('/add-info',createUserInfo)
      .get('/:id',getUserInfo);

console.log("in routes");
module.exports = router;