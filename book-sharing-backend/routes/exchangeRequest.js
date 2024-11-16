const express = require("express");
const { ExchangeRequest, Book, User } = require("../models");

const router = express.Router();

// Create an exchange request
router.post("/", async (req, res) => {
  const { bookId, requesterId, terms } = req.body;

  try {
    const book = await Book.findByPk(bookId);
    if (!book) return res.status(404).json({ message: "Book not found" });

    const exchangeRequest = await ExchangeRequest.create({
      bookId,
      requesterId,
      ownerId: book.userId,
      terms,
      status: "Pending",
    });

    res
      .status(201)
      .json({ message: "Exchange request created", exchangeRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all exchange requests for a user
router.get("/", async (req, res) => {
  const { userId } = req.query;

  try {
    const requests = await ExchangeRequest.findAll({
      where: { ownerId: userId },
      include: [
        { model: Book, attributes: ["title"] },
        { model: User, as: "Requester", attributes: ["username"] },
      ],
    });
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update the status of an exchange request
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const exchangeRequest = await ExchangeRequest.findByPk(id);
    if (!exchangeRequest)
      return res.status(404).json({ message: "Exchange request not found" });

    exchangeRequest.status = status;
    await exchangeRequest.save();

    res
      .status(200)
      .json({ message: "Exchange request updated", exchangeRequest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
