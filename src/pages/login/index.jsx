import React from "react";
import { Link } from "react-router-dom";

function Login() {
  function googleAuth() {
    window.open("http://localhost:8080/auth/google/callback", "_self");
  }

  return (
    <div>
      <h1>Login form</h1>
      <div>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign In</button>
      </div>
      <p>Or</p>
      <button
        onClick={googleAuth}
        style={{
          backgroundColor: "red",
        }}
      >
        <img src="" alt="" /> Image Login Sign In with google
      </button>
      <div>
        New Here <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
