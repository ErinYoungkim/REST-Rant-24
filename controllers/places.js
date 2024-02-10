const express = require("express");
const places = require("../models/places.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("places/index", { places });
});
router.get("/new", (req, res) => {
  res.render("places/new");
});
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(404).render('error404')
  }
  else if (!places[id]) {
    res.status(404).render('error404')
  }
  else {
    res.render('places/show', { place: places[id] })
  }
});
router.post("/", (req, res) => {
    console.log(req.body)
  if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.city) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
});

module.exports = router;
