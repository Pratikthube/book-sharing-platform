import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import tokenManager from "../../utils/tokenManager";

function Home() {
  const [token, setToken] = useState(tokenManager.getToken());

  const logout = useCallback(() => {
    tokenManager.setToken("");
    setToken(null);
  }, [token, setToken]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Book Exchange Platform</h1>
      <p>
        Discover new books, exchange your favorites, and connect with fellow
        book enthusiasts!
      </p>
      <div>
        {!token && (
          <Link to="/register">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Register
            </button>
          </Link>
        )}
        {!token && (
          <Link to="/login">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Login
            </button>
          </Link>
        )}
        {token && (
          <Link to="/books">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              View Books
            </button>
          </Link>
        )}
        {token && (
          <Link to="/add-book">
            <button style={{ margin: "10px", padding: "10px 20px" }}>
              Add a Book
            </button>
          </Link>
        )}
        {token && (
          <button
            style={{ margin: "10px", padding: "10px 20px" }}
            onClick={logout}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
