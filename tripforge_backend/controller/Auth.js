const { User } = require("../models/User");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET_KEY";
module.exports.createUser = async (req, res, next) => {
  // const user = new User(req.body);
  try {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      "sha256",
      async function (err, hashedPassword) {
        const user = new User({ ...req.body, password: hashedPassword, salt });
        console.log(user);
        const doc = await user.save();
        req.login({ id: doc.id }, (err) => {
          if (err) res.status(400).json(err);
          else {
            const token = jwt.sign({ id: doc.id }, SECRET_KEY);
            res
              .cookie("jwt", token, {
                expires: new Date(Date.now() + 3600000),
                httpOnly: true,
              })
              .status(201)
              .json(token);
          }
        });
      }
    );
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
  res
    .cookie("jwt", req.user.token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    .status(201)
    .json(req.user.token);
};

module.exports.checkUser = async (req, res, next) => {
  res.json({ status: "success", user: req.user });
};
