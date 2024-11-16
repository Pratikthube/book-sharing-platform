import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosHandler from "../../utils/axiosRequest";

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
      const response = await axiosHandler().post("/auth/register", {
        username,
        email,
        password,
      });
      alert("Register successful! ");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Register failed.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Fill your details</h1>
      <form onSubmit={handleRegister}>
        <input
          style={{ margin: "5px" }}
          type="text"
          required
          minlength="4"
          maxlength="10"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
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
        />
        <br />
        <button style={{ margin: "5px" }} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
