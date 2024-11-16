import React, { useEffect, useState } from "react";
import axios from "../../utils/axiosRequest";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("/api/books");
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
    <div>
      <h1>
        <button>
          <i class="fa-solid fa-house"></i>
        </button>
        Available Books
      </h1>
      <ul>
        {books.map((book) => (
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
  );
}

export default BookList;
