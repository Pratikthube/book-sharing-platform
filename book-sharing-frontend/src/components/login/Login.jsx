import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tokenManager from "../../utils/tokenManager";
import axiosHandler from "../../utils/axiosRequest";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosHandler().post("/auth/login", {
        email,
        password,
      });
      tokenManager.setToken(response.data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login to ShareBook</h1>
      <form onSubmit={handleLogin}>
        <input
          style={{ margin: "5px" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          style={{ margin: "5px" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button style={{ margin: "5px" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
