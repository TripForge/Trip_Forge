const { User } = require("../models/User");

module.exports.createUser = async (req, res, next) => {
  // const user = new User(req.body);
  try {
    console.log("body", req.body);
    const user = await User.create(req.body);
    if (!user) {
      res.status(201).json(null);
    }
    // const doc = await user.save();
    else {
      res.status(201).json(user);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

// module.exports.fetchUser = async(req, res) => {
//     const {id} = req.params;
//     try {
//         const user = await User.findById(id);
//         res.status(200).json(user)
//     } catch(err) {
//         res.status(400).json(err);
//     }
// }

module.exports.loginUser = async (req, res, next) => {
  // const user = new User(req.body);
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if(!user) {
        res.status(401).json({message : 'no such user email'})
    } else if (user.password === req.body.password) {
      res.status(201).json({id : user.id, email : user.email});
    } else {
        res.status(401).json({message : 'invalid credentials'})
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
