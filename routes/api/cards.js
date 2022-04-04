const express = require("express");
const router = express.Router();
import Card from "../../models/Card";

//only need index
router.get("/", (req, res) => {
  Card.find()
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
