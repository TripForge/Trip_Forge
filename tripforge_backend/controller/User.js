const UserInfo = require('../models/UserInfo');
module.exports.createUserInfo = async (req, res, next) => {
    const userInfo =  new UserInfo(req.body);
    try {
        const doc = await userInfo.save();
        console.log('doc is', doc);
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
module.exports.getUserInfo = async (req, res, next) => {
    const {id} = req.params;
    // console.log('id is ',id);
    try {
        const currUserInfo = await UserInfo.findById(id);
        console.log('currentUserInfo', currUserInfo);
        res.status(201).json(currUserInfo);
    } catch(err) {
        res.status(400).json(err);
    }
}