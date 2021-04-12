const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const passport = require("passport")
const User = require("../models/userschema.js")
const experienceschema = require('../models/experienceschema.js');
var parser = require('word-text-parser');
var WordExtractor = require("word-extractor");
const fs = require('fs')
const addexp = async (expDets, fts, role, res) => {

  try {

    const experienceschemauser = new experienceschema;

    experienceschemauser.name = expDets.uname;

    experienceschemauser.email = expDets.email;

    experienceschemauser.year = expDets.year;

    experienceschemauser.company = expDets.company;

    experienceschemauser.linkedinlink = expDets.linkedIn;

    experienceschemauser.experiencefile.data = fs.readFileSync('./uploads/' + fts.filename)

    // experienceschemauser.experiencefile.contentType = "document/pdf"

    // parser(fs.readFileSync('./uploads/'+fts.filename),function(resultList){
    //   console.log('hiiiiiiiiiiiiiiiiiiiii'+ resultList)
    // })

    var extractor = new WordExtractor();
    var extracted = extractor.extract("./uploads/"+fts.filename);
    try{
    extracted.then(function(doc) {
      console.log(doc.getBody());
    });
  }catch(e){

  }
    

    experienceschemauser.isverified = false
    await experienceschemauser.save()
    return res.status(201).json({
      message: "Posted success.",
      success: true
    });
  }
  catch (err) {
    return res.status(500).json({
      message: err,
      success: false
    });
  }
};
const userRegister = async (userDets, role, res) => {
  try {
    let usernameNotTaken = await validateUsername(userDets.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      });
    }
    const password = await bcrypt.hash(userDets.password, 12);
    const newUser = new User
    newUser.username = userDets.username
    newUser.password = password
    newUser.role = role
    await newUser.save();
    return res.status(201).json({
      message: "You are successfully registred.",
      success: true
    });
  } catch (err) {
    return res.status(500).json({
      message: "Unable to create your account.",
      success: false
    });
  }
};
const getpendingapprovals = async (res) => {
  const data = await experienceschema.find({ isverified: { $in: ["no"] } })
  return res.status(200).json({
    message: data,
    success: true
  });
};
const userLogin = async (userCreds, role, res) => {
  let { username, password } = userCreds;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({
      message: "Username is not found. Invalid login credentials.",
      success: false
    });
  }
  if (user.role !== role) {
    return res.status(403).json({
      message: "Please make sure you are logging in from the right portal.",
      success: false
    });
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    let token = jwt.sign(
      {
        user_id: user._id,
        role: user.role,
        username: user.username,
        email: user.email
      },
      'secret',
      { expiresIn: "7 days" }
    );

    let result = {
      username: user.username,
      role: user.role,
      email: user.email,
      token: `Bearer ${token}`,
      expiresIn: 168
    };

    return res.status(200).json({
      ...result,
      message: "Hurray! You are now logged in.",
      success: true
    });
  } else {
    return res.status(403).json({
      message: "Incorrect password.",
      success: false
    });
  }
};

const validateUsername = async username => {
  let user = await User.findOne({ username });
  return user ? false : true;
};


const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();

const validateEmail = async email => {
  let user = await User.findOne({ email });
  return user ? false : true;
};

const getallexp = async (res) => {
  const data = await experienceschema.find({ isverified: { $in: ["yes"] } })
  console.log(data)
  return res.status(200).json({
    message: data,
    success: true
  });
};
const getspecificexp = async (cmpny, res) => {
  const data = await experienceschema.find({ isverified: { $in: ["yes"] }, company: { $in: [cmpny] } })
  console.log(data.length)
  return res.status(200).json({
    message: data,
    success: true
  });
}

const changeapproval = async (objid, res) => {
  experienceschema.findByIdAndUpdate(objid, { isverified: true }, function (err, docs) {
    if (err) {
      return res.status(400).json({
        message: err,
        success: false
      });
    }
    else {
      return res.status(200).json({
        message: docs,
        success: true
      });
    }
  })
}
module.exports = {
  userAuth,
  addexp,
  checkRole,
  userLogin,
  userRegister,
  getpendingapprovals,
  getallexp,
  getspecificexp,
  changeapproval
};
