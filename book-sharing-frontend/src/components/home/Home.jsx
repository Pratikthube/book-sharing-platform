import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Book Exchange Platform</h1>
      <p>
        Discover new books, exchange your favorites, and connect with fellow
        book enthusiasts!
      </p>
      <div>
        <Link to="/login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>
            Login
          </button>
        </Link>
        <Link to="/books">
          <button style={{ margin: "10px", padding: "10px 20px" }}>
            View Books
          </button>
        </Link>
        <Link to="/add-book">
          <button style={{ margin: "10px", padding: "10px 20px" }}>
            Add a Book
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
