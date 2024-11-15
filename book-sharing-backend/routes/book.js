const express = require("express");
const { Book } = require("../models/index");
const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Add a book
router.post("/", async (req, res) => {
  const { title, author, genre, condition, userId } = req.body;
  const book = await Book.create({ title, author, genre, condition, userId });
  res.json(book);
});

module.exports = router;
