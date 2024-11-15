const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    bookId: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
