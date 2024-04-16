import Slider from "react-slick";
import React, { useEffect } from "react";

import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./scss/slick.css";

export default function Home() {
  return (
    <>
      {/* hero section starts */}
      <div className="homepage">
        <div className="container">
          <div className="hero-section">
            <p className="hero-section_badge">A Vision for Your Life</p>
            <h1 className="hero-section_title h1">
              Find Your Best{" "}
              <span className="hero-section_title_blue">Real Estate</span>
            </h1>
            <p className="hero-section_info">
              Nemo enim ipsam voluptatem quia voluptas sit aspernat odit aut
              fugit, sed quia consequuntur magni dolores qui ratione sequi
              nesciunt.
            </p>
            <div className="hero-section_buttongroup">
              <button className="hero-section_button btn">Buy</button>
              <button className="hero-section_button btn">Sell</button>
              <button className="hero-section_button btn">Rent</button>
            </div>
            <div className="hero-section_dropdown">
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn dropdown-toggle dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="../assets/images/location.svg" alt="Location" />{" "}
                  Location
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    Ahmedabad
                  </a>
                  <a className="dropdown-item" href="#">
                    Vadodara
                  </a>
                </div>
                <button
                  id="btnGroupDrop2"
                  type="button"
                  className="btn dropdown-toggle dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="../assets/images/property.svg" alt="Property" />{" "}
                  Property
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop2">
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
                <button
                  id="btnGroupDrop3"
                  type="button"
                  className="btn dropdown-toggle dropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="../assets/images/price.svg" alt="Price" /> Price
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop3">
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                  <a className="dropdown-item" href="#">
                    Dropdown link
                  </a>
                </div>
                <button type="button" className="btn hero-section_searchbutton">
                  <img src="../assets/images/search.svg" alt="Search" /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero section ends */}
      {/* property slider section starts */}
      <div className="container">
        <h2 className="slider_title h2">
          <span className="slider_title_blue">Property </span>Types
        </h2>
        <Slider
          {...{
            slidesPerRow: 5,
            initialSlide: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "linear",
            slidesToScroll: 1,
          }}
          className="brandslider"
        >
          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img
                src="../assets/images/privatehouse.svg"
                alt="Private House"
              />
              Private House
            </a>
            <div className="slider_listings">360 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img src="../assets/images/apartment.svg" alt="Apartment" />
              Apartment
            </a>
            <div className="slider_listings">265 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img
                src="../assets/images/exclusivehotel.svg"
                alt="Exclusive Hotel"
              />
              Exclusive Hotel
            </a>
            <div className="slider_listings">480 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img src="../assets/images/privateroom.svg" alt="Private Room" />
              Private Room
            </a>
            <div className="slider_listings">102 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img src="../assets/images/warehouse.svg" alt="Warehouse" />
              Warehouse
            </a>
            <div className="slider_listings">136 Listing</div>
          </div>
          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img
                src="../assets/images/privatehouse.svg"
                alt="Private House"
              />
              Private House
            </a>
            <div className="slider_listings">360 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img src="../assets/images/apartment.svg" alt="Apartment" />
              Apartment
            </a>
            <div className="slider_listings">265 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img
                src="../assets/images/exclusivehotel.svg"
                alt="Exclusive Hotel"
              />
              Exclusive Hotel
            </a>
            <div className="slider_listings">480 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img src="../assets/images/privateroom.svg" alt="Private Room" />
              Private Room
            </a>
            <div className="slider_listings">102 Listing</div>
          </div>

          <div className="slide">
            <a href="https://www2.hm.com/en_in/index.html">
              <img src="../assets/images/warehouse.svg" alt="Warehouse" />
              Warehouse
            </a>
            <div className="slider_listings">136 Listing</div>
          </div>
        </Slider>
      </div>
      {/* property slider section ends */}
      {/* about us section starts */}
      <section id="aboutus">
        <div className="about-us">
          <div className="container">
            <h2 className="slider_title h2">
              <span className="slider_title_blue">About </span>Us
            </h2>
            <div className="about-us_details">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-us_img">
                    <img src="../assets/images/about-us.png" alt="About Us" />
                  </div>
                  <div className="about-us_circle-effect">
                    <img
                      src="../assets/images/Circle-effect.svg"
                      alt="Circle Effect"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-us_info">
                    <h3 className="h3 about-us_title">
                      We Are The Best And Trusted
                      <span className="slider_title_blue"> Real Estate </span>
                      Agent
                    </h3>
                    <p className="about-us_info_para">
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat.
                    </p>
                    <p className="about-us_info_para">
                      Sed ut perspiciatis unde omnis iste natus voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae.
                    </p>
                    <div className="about-us_accordion">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item about-us_accordion_item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <img src="../assets/images/accordion-icon.svg" />
                              Sed ut perspiciatis unde omnis ?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit sed quia
                              consequuntur magni dolores ratione voluptatem
                              sequi nesciunt.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item about-us_accordion_item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <img src="../assets/images/accordion-icon.svg" />
                              Quis autem vel eum iure reprehenderit ?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit sed quia
                              consequuntur magni dolores ratione voluptatem
                              sequi nesciunt.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item about-us_accordion_item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <img src="../assets/images/accordion-icon.svg" />
                              Sed ut perspiciatis unde omnis..?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit sed quia
                              consequuntur magni dolores ratione voluptatem
                              sequi nesciunt.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us section ends */}
      {/* best deals section starts */}
      <div className="best-deals">
        <div className="container">
          <div className="best-deals_details">
            <div className="row">
              <div className="col-lg-6">
                <div className="best-deals_info">
                  <h3 className="h3 about-us_title best-deals_title ">
                    We Are Offering The Best
                    <span className="slider_title_blue"> Real Estate </span>
                    Deals
                  </h3>
                  <p className="about-us_info_para">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat.
                  </p>
                  <p className="about-us_info_para">
                    Sed ut perspiciatis unde omnis iste natus voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae.
                  </p>
                  <div className="best-deals_points">
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      A building with only one room and typically a steep pointy
                      roof.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      A vehicle on wheels that has a permanent residence
                      attached to it.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Performing financial analysis and valuation of properties.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Someone who examines buildings and works with appraisers.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      A dwelling typically made of raw materials such as bamboo,
                      mud, and clay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="best-deals_img">
                  <img src="../assets/images/best-deals.png" alt="Best Deals" />
                </div>
                <div className="best-deals_circle-effect">
                  <img
                    src="../assets/images/Circle-effect.svg"
                    alt="Circle Effect"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* best deals section ends*/}
    </>
  );
}
