import "../scss/style.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import Img from "../assets/images/Homeey-logo.svg";

export default function Header() {
   const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="header-wrap">
      <header>
        <div className="container">
          <div className="content">
            <div className="header-left">
              <a href="/">
                <img src="../assets/images/Homeey-logo.svg" alt="Logo" />
                {/* <img src={Img} alt="Logo" /> */}
              </a>
            </div>
            <div className="header-right">
              <div className="header_navbar">
                <ul>
                  <li className="header_navbar_item">
                    <a href="/">Home</a>
                  </li>
                  <li className="header_navbar_item">
                    <a href="#property">Property</a>
                  </li>
                  <li className="header_navbar_item">
                    <a href="#aboutus">About</a>
                  </li>
                  <li className="header_navbar_item">
                    <a href="#">Review</a>
                  </li>
                  <li className="header_navbar_item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="header_navbar_item">
                    <a href="#footer">Contact</a>
                  </li>
                  <Link to="/profile">
                    {currentUser ? (
                      <img                        
                        src={currentUser.avatar}
                        alt="profile"
                        className="rounded-circle mb-2"
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <li className="header_navbar_item signin text-slate-700 hover:underline">
                        {" "}
                        Sign in
                      </li>
                    )}
                  </Link>
                </ul>
                <div>
                  <a href="/sign-up">
                    <button className="header_navbar_button btn">
                      Sign up
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
