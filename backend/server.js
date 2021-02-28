const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const passport = require("passport");
var corsOptions = {
  origin: "http://localhost:3000"
};
require("./middlewares/passport")(passport);
app.use(cors(corsOptions));

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
