const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://plcweb:123@cluster0.3m9aq.mongodb.net/Experience_DB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true
})
const UserSchema = new Schema(
  {
    role: {
      type: String,
      default: "admin",
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