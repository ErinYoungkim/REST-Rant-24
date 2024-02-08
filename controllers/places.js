const express = require("express");
const places = require("../models/places.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("places/index", { places });
});
router.get("/new", (req, res) => {
  res.render("places/new");
});
router.get("/:id", (req, res) => {
  res.render("places/show", { place });
});
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

module.exports = router;
