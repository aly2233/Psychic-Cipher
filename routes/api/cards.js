const Card = require("../../models/Card");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//only need index
router.get("/", (req, res) => {
  console.log(req.query)
  let filter = req.body.name || req.query.name ? {
    name: {
        $regex: req.body.name || req.query.name,
        $options: "i"
      }
    } : {};
  Card.find(filter)
    .sort({ nameShort: 1 })
    .then(cards => res.json(cards))
    .catch(err => res.status(404).json({ noCardsFound: "index function bug" }))
});

//only need show
router.get("/:id", (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.status(404).json({ noCardFound: "show function bug" }))
});


module.exports = router;