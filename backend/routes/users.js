const router = require("express").Router();
const {
  userAuth,
  userLogin,
  userRegister,
} = require("../utils/Auth");

//api for user registration
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

//api for admin registration
router.post("/register-admin", async (req, res) => {
  console.log(req.body)
  await userRegister(req.body, "admin", res);
});

//api for user login
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});

//api for admin login
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});


module.exports = router;