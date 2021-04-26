const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.connect('mongodb://admin:admin@18.221.72.173/placementdb', {
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