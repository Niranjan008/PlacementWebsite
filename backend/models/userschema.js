const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/placement-experience-db', {
  useNewUrlParser: true,
  useCreateIndex: true
})
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);