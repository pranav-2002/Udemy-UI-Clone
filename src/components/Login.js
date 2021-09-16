import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { firebase } from "../firebase";
import Footer from "./Footer";

function Login() {
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signInWithGoogle = () => {
    let google_provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(google_provider)
      .then((user) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const signInWithEmail = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
      <div className="login">
        <div className="login__content">
          <button onClick={signInWithGoogle} className="login__option">
            <img
              src="https://www.udemy.com/staticx/udemy/js/webpack/g-logo.4c9c3df69e998b08e1d14c4bbbeb3949.svg"
              alt="google"
            />
            <h4>Continue with Google</h4>
          </button>
          <div className="login__inputs">
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
            <button type="submit" onClick={signInWithEmail}>
              Log In
            </button>
          </div>
          <div className="login__text">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
