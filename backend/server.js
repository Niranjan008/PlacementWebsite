const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();
const passport = require("passport");
const fs = require("fs")
const path = require("path")
var corsOptions = {
origin: "*"
};

mongoose.connect('mongodb://admin:admin@18.221.72.173/placementdb', {
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
app.use(cors(corsOptions));

app.use(passport.initialize());

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))


app.use("/api/users", require("./routes/users"));
app.use("/api/experiences",require("./routes/experiences"))
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/build/index.html'));
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
