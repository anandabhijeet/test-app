import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const Login = (props) => {
  const { onclick } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    const data = localStorage.getItem("form");
    const newData = JSON.parse(data);
    let pass = newData.password;
    let mail = newData.email;
    console.log("pass", pass);
    if (!email || !password) {
      alert("Please enter details");
    } else if (password !== pass || email !== mail) {
      alert("Please enter correct creddentials");
    } else {
      alert("Login Successful");
      history.push("/home");
    }
  };

  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="buttons py-3">
        <button type="submit" className="btn btn-primary mr-3" onClick={login}>
          Login
        </button>

        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={onclick}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Login;
