import React, { useEffect, useState } from "react";

import axiosHandler from "../../utils/axiosRequest";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axiosHandler().get("/api/books");
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const exchangeBook = (bookId) => {
    alert(
      "Exchange Request raised , Book woner will connect with you on message"
    );
  };

  return (
    <>
      <span>
        <button style={{ margin: "5px" }} onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </span>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Available Books</h1>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Search book"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <ul>
          {books
            .filter((book) => book.title.includes(bookName))
            .map((book) => (
              <li key={book.id}>
                {book.title} by {book.author} - {book.genre}
                <button
                  style={{ margin: "10px", padding: "10px 20px" }}
                  onClick={() => exchangeBook(book.id)}
                >
                  Exchange
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default BookList;
