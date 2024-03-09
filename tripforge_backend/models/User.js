const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: [Schema.Types.Mixed] },
  phone: {
    type: Number,
    min: [10, "enter correct Number"],
  },
  // date : {
  //   type : Date,
  //   required : true,
  // }
});

const virtual = userSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.User = mongoose.model("User", userSchema);
