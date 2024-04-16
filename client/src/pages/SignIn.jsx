import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/style.scss";

export default function SignIn() {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="signin-page">
      <div className="row">
        <div className="col-lg-6">
          <div className="signup-page_right text-center">
            <div className="signup-page_right_img text-center">
              <img src="../assets/images/signup-img.png" alt="Sign up visual" />
            </div>
            <h2 className="signup-page_heading text-center">
              Find Your Perfect Place With Homeey
            </h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="signup-page_left">
            <div className="signup-page_left_header">
              <img src="../assets/images/signup-logo.svg" alt="Homeey Logo" />
              <h2 className="signup-page_left_heading">Welcome to Homeey</h2>
              <p className="signup-page_left_para">
                Welcome back! Login with your data that you entered during
                registration.
              </p>
            </div>
            <form className="signup-page_form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                SIGN IN
              </button>
            </form>
            <div className="social-login">
              <button className="btn">
                <img src="../assets/images/google.svg" alt="Google login" />
                Login with Google
              </button>

            </div>
            <p className="signup-page_left_signin">
              Create a new account <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
