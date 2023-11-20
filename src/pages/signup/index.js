import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  function googleAuth() {
    window.open("http://localhost:3000/auth/google/callback", "_self");
  }

  return (
    <div>
      <h1>Sign Up form</h1>
      <div>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </div>
      <p>Or</p>
      <button
        onClick={googleAuth}
        style={{
          backgroundColor: "red",
        }}
      >
        <img src="" alt="" /> Image Sign Up with google
      </button>
      <div>
        Already Have Account ? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
