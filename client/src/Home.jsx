import Slider from "react-slick";
import React from "react";

import "./scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

// import "./scss/slick.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
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
              Simplifying property search. Explore curated real estate options
              tailored to you. Find your dream home effortlessly.
            </p>

            <div className="hero-section_dropdown d-flex align-items-center">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-100 p-3 rounded-lg d-flex align-items-center flex-grow-1"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-0 flex-grow-1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className="border-0 bg-transparent  ml-2 ">
                  <FaSearch />
                </button>
              </form>

              {/* <button type="button" className="btn hero-section_searchbutton">
                <img src="../assets/images/search.svg" alt="Search" /> Search
              </button> */}
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
            <a href="/">
              <img
                src="../assets/images/privatehouse.svg"
                alt="Private House"
              />
              Private House
            </a>
            <div className="slider_listings">360 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img src="../assets/images/apartment.svg" alt="Apartment" />
              Apartment
            </a>
            <div className="slider_listings">265 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img
                src="../assets/images/exclusivehotel.svg"
                alt="Exclusive Hotel"
              />
              Exclusive Hotel
            </a>
            <div className="slider_listings">480 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img src="../assets/images/privateroom.svg" alt="Private Room" />
              Private Room
            </a>
            <div className="slider_listings">102 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img src="../assets/images/warehouse.svg" alt="Warehouse" />
              Warehouse
            </a>
            <div className="slider_listings">136 Listing</div>
          </div>
          <div className="slide">
            <a href="/">
              <img
                src="../assets/images/privatehouse.svg"
                alt="Private House"
              />
              Private House
            </a>
            <div className="slider_listings">360 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img src="../assets/images/apartment.svg" alt="Apartment" />
              Apartment
            </a>
            <div className="slider_listings">265 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img
                src="../assets/images/exclusivehotel.svg"
                alt="Exclusive Hotel"
              />
              Exclusive Hotel
            </a>
            <div className="slider_listings">480 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img src="../assets/images/privateroom.svg" alt="Private Room" />
              Private Room
            </a>
            <div className="slider_listings">102 Listing</div>
          </div>

          <div className="slide">
            <a href="/">
              <img src="../assets/images/warehouse.svg" alt="Warehouse" />
              Warehouse
            </a>
            <div className="slider_listings">136 Listing</div>
          </div>
        </Slider>
      </div>
      {/* property slider section ends */}
      {/* popular property deals section starts  */}
      <section id="#property">
        <div className="property-deals">
          <h2 className="slider_title h2 m-0">
            <span className="slider_title_blue">Popular </span>Property Deals
          </h2>
          <div className="property-deals_cards d-flex justify-content-between">
            <div className="card">
              <img src="../assets/images/card-1.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../assets/images/card-2.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../assets/images/card-3.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../assets/images/card-4.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="property-deals_cards d-flex justify-content-between">
            <div className="card">
              <img src="../assets/images/card-5.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../assets/images/card-6.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../assets/images/card-7.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="../assets/images/card-8.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">The Most Luxurious House</h5>
                <div className="property-card_location">
                  <img src="../assets/images/map-marker-radius.svg" />
                  <p className="card-text">4059 Waterview Texico, NM 88135</p>
                </div>
                <div className="property-card_facility">
                  <div className="property-card_bed">
                    <img src="../assets/images/bed-king-outline.svg" />
                    <p className="card-text">3 Bedroom</p>
                  </div>
                  <div className="property-card_bath">
                    <img src="../assets/images/shower.svg" />
                    <p className="card-text">2 Bathroom</p>
                  </div>
                </div>
                <hr />
                <div className="property-card_pricedetails">
                  <p className="property-card_price">
                    $1,560/ <span className="property-card_per">Night</span>
                  </p>
                  <a href="#" className="btn cardbutton_viewmore">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popular property deals section ends */}
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
                      At our agency, we pride ourselves on being your trusted
                      ally in the world of real estate. With a track record of
                      excellence and a commitment to your satisfaction, we're
                      here to guide you every step of the way.
                    </p>
                    <p className="about-us_info_para">
                      Whether you're buying, selling, or investing, our
                      experienced team is dedicated to delivering exceptional
                      service tailored to your needs.
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
                              Expert Guidance Every Step of the Way
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Our team of seasoned professionals is here to
                              provide you with expert advice and support
                              throughout your real estate journey. From initial
                              consultation to closing, we'll ensure you have the
                              information and assistance you need to make
                              informed decisions.
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
                              Tailored Solutions for Your Needs
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              We understand that every client is unique, which
                              is why we offer personalized solutions to meet
                              your specific requirements. Whether you're
                              searching for your dream home or maximizing your
                              investment potential, we'll tailor our approach to
                              align with your goals.
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
                              Transparent and Honest Communication
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Communication is key to a successful real estate
                              experience. That's why we prioritize transparency
                              and honesty in all our interactions. You can trust
                              us to keep you informed every step of the way,
                              providing clear and open communication throughout
                              the process.
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
                    Discover a world of extraordinary real estate deals with us.
                    Our team is dedicated to bringing you the best properties on
                    the market, tailored to your unique needs and preferences.
                  </p>
                  <p className="about-us_info_para">
                    We Offer Unmatched Real Estate Opportunities.
                  </p>
                  <div className="best-deals_points">
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Explore distinctive properties, from historic landmarks to
                      modern masterpieces.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Find innovative living solutions with our selection of
                      high-quality mobile homes.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Benefit from our financial analysis and valuation services
                      to make informed investment decisions.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Our team of experts is here to guide you through every
                      step of the buying or selling process.
                    </p>
                    <br />
                    <img src="../assets/images/best-deals-arrow.svg" />
                    <p className="best-deals_points-info">
                      Embrace sustainable living with our range of eco-friendly
                      homes made from natural materials.
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
      {/* counter section starts  */}
      <div className="counter">
        <div className="counter-division">
          <img src="../assets/images/crown.svg" />
          <div className="counter_info">
            <h1 className="counter_number">10.5k</h1>
            <p className="counter_para">Premium Property</p>
          </div>
          <div className="counter_img crown">
            <img src="../assets/images/crown-vector.svg" />
          </div>
        </div>
        <div className="counter-division">
          <img src="../assets/images/happy.svg" />
          <div className="counter_info">
            <h1 className="counter_number">8600+</h1>
            <p className="counter_para">Happy Customer</p>
          </div>
          <div className="counter_img smile">
            <img src="../assets/images/happy-vector.svg" />
          </div>
        </div>
        <div className="counter-division">
          <img src="../assets/images/trophy.svg" />
          <div className="counter_info">
            <h1 className="counter_number">1200</h1>
            <p className="counter_para">Award Winning</p>
          </div>
          <div className="counter_img trophy">
            <img src="../assets/images/trophy-vector.svg" />
          </div>
        </div>
        <div className="counter-division">
          <img src="../assets/images/home.svg" />
          <div className="counter_info">
            <h1 className="counter_number">750</h1>
            <p className="counter_para">Years Experience</p>
          </div>
          <div className="counter_img home">
            <img src="../assets/images/home-vector.svg" />
          </div>
        </div>
      </div>
      {/* counter section ends */}
      {/* featured properties section starts  */}
      <div className="featured-properties">
        <h2 className="slider_title h2 m-0">
          <span className="slider_title_blue">Featured </span>Properties
        </h2>
        <div className="featured-properties_cards d-flex justify-content-between">
          <div className="card">
            <img src="../assets/images/modern.jpg" alt="Card image cap" />
            <div className="card-body">
              <div className="card-title_group  justify-content-between d-flex">
                <h5 className="card-title">A Modern House Accentuates</h5>
                <img src="../assets/images/for-sale.svg" />
              </div>
              <div className="property-card_location">
                <img src="../assets/images/map-marker-radius.svg" />
                <p className="card-text">4059 Waterview Texico, NM 88135</p>
              </div>
              <div className="features-card_pricedetails">
                <img src="../assets/images/Star.svg" />
                <p className="features-card_price text-dark">$850</p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="../assets/images/capital.jpg" alt="Card image cap" />
            <div className="card-body">
              <div className="card-title_group  justify-content-between d-flex">
                <h5 className="card-title">
                  Capital Hill Residence in New Your
                </h5>
                <img src="../assets/images/for-sale.svg" />
              </div>
              <div className="property-card_location">
                <img src="../assets/images/map-marker-radius.svg" />
                <p className="card-text">1758 Lake Floyd Circle, DE 19707</p>
              </div>
              <div className="property-card_pricedetails">
                <img src="../assets/images/Star.svg" />
                <p className="property-card_price text-dark">$1,050</p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="../assets/images/modern-house.jpg" alt="Card image cap" />
            <div className="card-body">
              <div className="card-title_group  justify-content-between d-flex">
                <h5 className="card-title">A Modern House Accentuates</h5>
                <img src="../assets/images/for-sale.svg" />
              </div>
              <div className="property-card_location">
                <img src="../assets/images/map-marker-radius.svg" />
                <p className="card-text">3994 Jewell Road, MN 55402</p>
              </div>
              <div className="property-card_pricedetails">
                <img src="../assets/images/Star.svg" />
                <p className="property-card_price text-dark">$1,200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* featured properties section ends  */}
    </>
  );
}
