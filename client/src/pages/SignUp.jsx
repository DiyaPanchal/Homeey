import React from "react";
import { Link } from "react-router-dom"; 
import "../scss/style.scss"; 

export default function SignUp() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signup-page">
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
                Welcome back! login with your data that you entered during
                registration.
              </p>
            </div>
            <form className="signup-page_form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                SIGN UP
              </button>
            </form>
            <div className="social-login">
              <button className="btn">
                <img src="../assets/images/google.svg" alt="Google login" />
                Login with Google
              </button>
            </div>
            <p className="signup-page_left_signin">
              Have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


