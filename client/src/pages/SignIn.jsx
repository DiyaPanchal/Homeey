import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../scss/style.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
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
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary btn-block"
              >
                {loading ? "Loading.." : "SIGN IN"}
              </button>
            </form>
            <div className="social-login">
                            <OAuth />
            </div>
            <p className="signup-page_left_signin">
              Create a new account <Link to="/sign-up">Sign up</Link>
            </p>
            {error && <p className="text-danger mt-5">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
