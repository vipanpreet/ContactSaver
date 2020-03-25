const express = require("express");
const router = express.Router();

//@route       GET api/contacts
//@desc        Get all user contacts
//@access      Private
router.get("/", (req, res) => {
  res.json({ reg: "Get all contacts" });
});

//@route       POST api/contacts
//@desc        Add new contact
//@access      Private
router.post("/", (req, res) => {
  res.json({ reg: "Add contacts" });
});

//@route       PUT api/contacts/:id
//@desc        Update user contacts
//@access      Private
router.put("/:id", (req, res) => {
  res.json({ reg: "Update contacts" });
});

//@route       DELETE api/contacts/:id
//@desc        Delete user contacts
//@access      Private
router.delete("/:id", (req, res) => {
  res.json({ reg: "Delete contacts" });
});

module.exports = router;
