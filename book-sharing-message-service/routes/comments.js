const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Add a comment
router.post("/", async (req, res) => {
  const { bookId, userId, content } = req.body;
  try {
    const comment = new Comment({ bookId, userId, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get comments for a specific book
router.get("/:bookId", async (req, res) => {
  const { bookId } = req.params;
  try {
    const comments = await Comment.find({ bookId }).sort({ timestamp: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
