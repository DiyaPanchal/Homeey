{
  /* hero section starts */
}
<div className="homepage">
  <div className="container">
    <div className="hero-section">
      <p className="hero-section_badge">A Vision for Your Life</p>
      <h1 className="hero-section_title h1">
        Find Your Best{" "}
        <span className="hero-section_title_blue">Real Estate</span>
      </h1>
      <p className="hero-section_info">
        Nemo enim ipsam voluptatem quia voluptas sit aspernat odit aut fugit,
        sed quia consequuntur magni dolores qui ratione sequi nesciunt.
      </p>
      <div className="hero-section_buttongroup">
        <button className="hero-section_button btn">Buy</button>
        {/* <button className="hero-section_button btn">Sell</button>  */}
        <button className="hero-section_button btn">Rent</button>
      </div>
      <form>
        <div className="hero-section_dropdown">
          <div className="btn-group">
            <input
              type="text"
              className="btn dropdown-toggle dropdown"
              name="location"
              placeholder="Location"
            />
            {/* <img src="../assets/images/location.svg" alt="Location" /> */}

            <input
              type="text"
              className="btn dropdown-toggle dropdown"
              name="property"
              placeholder="Property"
            />
            {/* <img src="../assets/images/property.svg" alt="Property" /> */}

            <input
              type="text"
              className="btn dropdown-toggle dropdown"
              name="price"
              placeholder="Price"
            />
            {/* <img src="../assets/images/price.svg" alt="Price" /> */}
            {/* <input
                  id="searchInput"
                  type="text"
                  placeholder="Search here.. "
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                /> */}
            <button type="button" className="btn hero-section_searchbutton">
              <img src="../assets/images/search.svg" alt="Search" /> Search
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>;
{
  /* hero section ends */
}
