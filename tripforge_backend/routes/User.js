const express = require('express');
// const {createUser, loginUser, checkAuth} = require('../controller/Auth');
const {createUserInfo} = require('../controller/User')
const router = express.Router();
router.post('/add-info',createUserInfo);

console.log("in routes");
module.exports = router;