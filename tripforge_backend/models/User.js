const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: [Schema.Types.String] },
  phone: {
    type: Number,
    min: [10, "enter correct Number"],
    max: [10, "enter correct Number"],
  },
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
