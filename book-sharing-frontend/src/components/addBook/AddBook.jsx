import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosHandler from "../../utils/axiosRequest";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [condition, setCondition] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosHandler().post(
        "/api/books",
        { title, author, genre, condition },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      alert("Book added successfully!");
      navigate("/books");
    } catch (err) {
      console.error(err);
      alert("Failed to add book.");
    }
  };

  return (
    <>
      <span>
        <button style={{ margin: "5px" }} onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </span>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Add your book here</h1>
        <form onSubmit={handleSubmit}>
          <input
            style={{ margin: "5px" }}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            style={{ margin: "5px" }}
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <input
            style={{ margin: "5px" }}
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <br />
          <input
            style={{ margin: "5px" }}
            type="text"
            placeholder="Condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
          <br />
          <button style={{ margin: "5px" }} type="submit">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
