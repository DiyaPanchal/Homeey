import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../scss/style.scss"; 
import { useState } from "react";



export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }
  
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{

      setLoading(true);
      const res = await fetch('/api/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    }
    catch(error){
      setLoading(false);
      setError(error.message);
    }
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
                  onChange={handleChange}
                />
              </div>
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
                {loading ? "Loading.." : "SIGN UP"}
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
            {error && <p className="text-danger mt-5">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};


