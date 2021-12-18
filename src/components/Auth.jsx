import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import "../App.css";

const Auth = () => {
  const [authstate, setAuthState] = useState(true);

  return (
    <div>
      <div className="container auth-tab">
        <h2 className="py-3">{authstate ? "Login" : "SignUp"}</h2>
        {authstate ? (
          <Login
            onclick={() => {
              setAuthState(false);
            }}
          />
        ) : (
          <SignUp
            onclick={() => {
              setAuthState(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Auth;
