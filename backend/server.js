const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const uuidv4 = require("uuid").v4;
const experienceschema = require('./db.js');
const fs = require('fs');
const path = require('path')
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
   const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
   cb(null, newFilename);
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.json({ message: "Hi." });
});
app.post('/add', upload.single('selectedFile'), (req, res) => {
  const experienceschemauser = new experienceschema;
  experienceschemauser.name = req.body.name;
  experienceschemauser.linkedinlink = req.body.linkedinlink;
  experienceschemauser.experiencefile.data = fs.readFileSync('./uploads/' + req.file.filename)
  experienceschemauser.experiencefile.contentType = "document/pdf"
  console.log(req.body);
  console.log(req.file.filename);
  experienceschemauser.save()
  res.status(200).send("Inserted");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  