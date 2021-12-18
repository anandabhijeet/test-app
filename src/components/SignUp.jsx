import React, { useState, useEffect } from "react";
import "../App.css";

const SignUp = (props) => {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const validate = () => {
    if (!validEmail.test(values.email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(values.password)) {
      setPwdError(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(values));
  }, [values]);

  const handelsubmit = (e) => {
    e.preventDefault();
    alert("submittted");
  };

  const handleChange = (e) => {
    setValues((initialValue) => ({
      ...initialValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">UserName</label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="exampleInputUsername"
          aria-describedby="emailHelp"
          placeholder="Username"
          onChange={handleChange}
          value={values.username}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputFirstname">firstname</label>
        <input
          type="text"
          name="firstname"
          className="form-control"
          id="exampleInputfirstname"
          placeholder="firstname"
          onChange={handleChange}
          value={values.firstname}
        />
      </div>
      <div className="form-group">
        <label for="exampleInputLastname">lastname</label>
        <input
          type="text"
          name="lastname"
          className="form-control"
          id="exampleInputlastname"
          placeholder="Last name"
          onChange={handleChange}
          value={values.lastname}
        />
      </div>

      <div className="form-group">
        <label for="exampleInputEmail">email</label>
        <input
          type="text"
          name="email"
          className="form-control"
          id="exampleInputemail"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
      </div>

      <div className="form-group">
        <label for="exampleInputPassword1">password</label>
        <input
          type="text"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
      </div>

      <div className="form-group">
        <label for="exampleInputPassword2">Confirm Password</label>
        <input
          type="text"
          name="confirm_password"
          className="form-control"
          id="exampleInputPassword2"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={values.confirm_password}
        />
      </div>

      <div className="buttons py-3">
        <button
          type="submit"
          className="btn btn-primary mr-3"
          onclick={handelsubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-success mx-3"
          onClick={(validate, props.onclick)}
        >
          Login
        </button>
      </div>
      {emailErr && <p>Your email is invalid</p>}
      {pwdError && <p>Your password is invalid</p>}
    </form>
  );
};

export default SignUp;
