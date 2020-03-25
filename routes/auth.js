const express = require("express");
const router = express.Router();

//@route       GET api/auth
//@desc        Get logged in user
//@access      Private
router.get("/", (req, res) => {
  res.json({ reg: "Get Logged in User" });
});

//@route       POST api/auth
//@desc        Auth user & get token
//@access      Public
router.post("/", (req, res) => {
  res.json({ reg: "Log in User" });
});

module.exports = router;
