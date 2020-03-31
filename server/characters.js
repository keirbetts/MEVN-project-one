const express = require("express");
const router = express.Router();
const singleCharacter = require("./singleCharacter");

router.get("/", async (req, res) => {
  try {
    const characters = await singleCharacter.find();
    res.json(characters);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const newCharacter = new singleCharacter({
    name: req.body.name,
    profession: req.body.profession
  });
  try {
    const createdCharacter = await newCharacter.save();
    res.status(201).json(createdCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
