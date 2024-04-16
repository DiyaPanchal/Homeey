import "../scss/style.scss";
import React from "react";

// import Img from "../assets/images/Homeey-logo.svg";

export default function Header() {
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
                  <li className="header_navbar_item signin">
                    <a href="/sign-in">Sign in</a>
                  </li>
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
