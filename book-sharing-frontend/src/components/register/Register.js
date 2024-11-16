import React, { useState } from "react";
import axios from "../../utils/axiosRequest";
import tokenManager from "../../utils/tokenManager";
import { useNavigate } from "react-router-dom";

function isValidPassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}

const passwordConstraint = `Password error
Password should be at list 8 char long,
Should contain at list one number, one special character and one upper case and lowercase letter`;

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      alert(passwordConstraint);
      return;
    }
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      tokenManager.setToken(response.data.token);
      alert("Register successful! YouwAESDFGYHUI90-Sasdfghuiop[=`1234567890");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        required
        minlength="4"
        maxlength="10"
        placeholder="User Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
