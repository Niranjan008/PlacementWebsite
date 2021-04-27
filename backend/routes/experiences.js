const router = require("express").Router();
const multer = require("multer");
const {
userAuth,
addexp,
checkRole,
getpendingapprovals,
getallexp,
getspecificexp,
changeapproval,
deleteexp
} = require("../utils/Auth");
const uuidv4 = require("uuid").v4;
const path = require('path')


//api to add experience only for signed in users
router.post("/add-exp",  async (req, res) => {
console.log(req.headers)
await addexp(req.body,"user", res);

});

//api with only admin level access for giving approvals
router.get("/get-pending-approvals", userAuth, checkRole(["admin"]), async (req, res) => {
await getpendingapprovals(res);
});

//api for viewing all experiences without authorization 
router.get("/getallexp", async (req, res) => {
await getallexp(res);
});

//api for viewing experiences relevant to a given company without authorization
router.get("/getbycompany/:company", async (req, res) => {
await getspecificexp(req.params.company, res);
})

router.get("/giveapproval/:id", async (req, res) => {
await changeapproval(req.params.id, res);
})

router.get("/deletef/:id",async (req,res)=>{
await deleteexp(req.params.id,res)
})
module.exports = router;