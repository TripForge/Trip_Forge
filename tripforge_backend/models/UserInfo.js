const mongoose = require("mongoose");
const { Schema } = mongoose;

const userInfoSchema = Schema({

  name : {type : String},
  email: {type: String},
  country : {type : String},
  streetAddress : {type : String},
  city : {type : String},
  state : {type : String},
});

const virtual = userInfoSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

userInfoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

module.exports = mongoose.model("UserInfo", userInfoSchema);
