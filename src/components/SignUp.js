import React from "react";
import Navbar from "./Navbar";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import { firebase } from "../firebase";

function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const signUpUsingEmail = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="signUp">
        <p className="signUp__text">Sign Up and Start Learning!</p>
        <div className="signUp__inputs">
          <input
            type="text"
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
          <button onClick={signUpUsingEmail} type="submit">
            Sign Up
          </button>
        </div>
        <div className="signUp__section">
          <p>Already have an account?</p>
          <Link to="/login">Log In</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
