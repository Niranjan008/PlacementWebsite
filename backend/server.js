const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();
const passport = require("passport");
var corsOptions = {
  origin: "*"
};
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://plcweb:123@cluster0.3m9aq.mongodb.net/Experience_DB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
mongoose.connect('mongodb+srv://plcweb:123@cluster0.3m9aq.mongodb.net/Experience_DB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
  console.log("Connected to MongoDB!")
});

mongoose.connection.on('error',(err)=>{
  console.log("Error connecting the server");
});

require("./middlewares/passport")(passport);
app.use(cors());

app.use(passport.initialize());

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.get("/", (req, res) => {
  res.json({ message: "Hi." });
});
app.use("/api/users", require("./routes/users"));
app.use("/api/experiences",require("./routes/experiences"))
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
