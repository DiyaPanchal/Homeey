import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Search() {
    const navigate = useNavigate();
    const [sidebardata, setSidebardata] = useState({
      searchTerm: "",
      type: "all",
      parking: false,
      furnished: false,
      offer: false,
      sort: "created_at",
      order: "desc",
    });

    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    console.log(listings);

    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const searchTermFromUrl = urlParams.get("searchTerm");
      const typeFromUrl = urlParams.get("type");
      const parkingFromUrl = urlParams.get("parking");
      const furnishedFromUrl = urlParams.get("furnished");
      const offerFromUrl = urlParams.get("offer");
      const sortFromUrl = urlParams.get("sort");
      const orderFromUrl = urlParams.get("order");

      if (
        searchTermFromUrl ||
        typeFromUrl ||
        parkingFromUrl ||
        furnishedFromUrl ||
        offerFromUrl ||
        sortFromUrl ||
        orderFromUrl
      ) {
        setSidebardata({
          searchTerm: searchTermFromUrl || "",
          type: typeFromUrl || "all",
          parking: parkingFromUrl === "true" ? true : false,
          furnished: furnishedFromUrl === "true" ? true : false,
          offer: offerFromUrl === "true" ? true : false,
          sort: sortFromUrl || "created_at",
          order: orderFromUrl || "desc",
        });
      }

      const fetchListings = async () => {
        setLoading(true);
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/listing/get?${searchQuery}`);
        const data = await res.json();
        setListings(data);
        setLoading(false);
      };

      fetchListings();
    }, [location.search]);

    const handleChange = (e) => {
      if (
        e.target.id === "all" ||
        e.target.id === "rent" ||
        e.target.id === "sale"
      ) {
        setSidebardata({ ...sidebardata, type: e.target.id });
      }

      if (e.target.id === "searchTerm") {
        setSidebardata({ ...sidebardata, searchTerm: e.target.value });
      }

      if (
        e.target.id === "parking" ||
        e.target.id === "furnished" ||
        e.target.id === "offer"
      ) {
        setSidebardata({
          ...sidebardata,
          [e.target.id]:
            e.target.checked || e.target.checked === "true" ? true : false,
        });
      }

      if (e.target.id === "sort_order") {
        const sort = e.target.value.split("_")[0] || "created_at";

        const order = e.target.value.split("_")[1] || "desc";

        setSidebardata({ ...sidebardata, sort, order });
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams();
      urlParams.set("searchTerm", sidebardata.searchTerm);
      urlParams.set("type", sidebardata.type);
      urlParams.set("parking", sidebardata.parking);
      urlParams.set("furnished", sidebardata.furnished);
      urlParams.set("offer", sidebardata.offer);
      urlParams.set("sort", sidebardata.sort);
      urlParams.set("order", sidebardata.order);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
    };
  return (
    <div className="row d-flex">
      <div className="col-md-4 border-bottom border-md-end p-4">
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="d-flex align-items-center gap-2">
            <label className="fw-bold">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="form-control rounded-lg"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex gap-2 flex-wrap align-items-center">
            <label className="fw-bold">Type:</label>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="all"
                className="form-check-input"
                onChange={handleChange}
                checked={sidebardata.type === "all"}
              />
              <label htmlFor="all" className="form-check-label">
                Rent & Sale
              </label>
            </div>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="form-check-input"
                onChange={handleChange}
                checked={sidebardata.type === "rent"}
              />
              <label htmlFor="rent" className="form-check-label">
                Rent
              </label>
            </div>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="sale"
                className="form-check-input"
                onChange={handleChange}
                checked={sidebardata.type === "sale"}
              />
              <label htmlFor="sale" className="form-check-label">
                Sale
              </label>
            </div>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="form-check-input"
                onChange={handleChange}
                checked={sidebardata.offer}
              />
              <label htmlFor="offer" className="form-check-label">
                Offer
              </label>
            </div>
          </div>
          <div className="d-flex gap-2 flex-wrap align-items-center">
            <label className="fw-bold">Amenities:</label>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="form-check-input"
                onChange={handleChange}
                checked={sidebardata.parking}
              />
              <label htmlFor="parking" className="form-check-label">
                Parking
              </label>
            </div>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="form-check-input"
                onChange={handleChange}
                checked={sidebardata.furnished}
              />
              <label htmlFor="furnished" className="form-check-label">
                Furnished
              </label>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <label className="fw-bold">Sort:</label>
            <select
              onChange={handleChange}
              defaultValue={"created_at_desc"}
              id="sort_order"
              className="border rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to hight</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="btn btn-primary mt-3">Search</button>
        </form>
      </div>
      <div className="col-md-8">
        <h1 className="text-3xl fw-bold border-bottom p-3 text-slate-700 mt-5">
          Listing results:
        </h1>
        <div className="p-7 d-flex flex-wrap gap-4">
          {!loading && listings.length === 0 && (
            <p className="text-xl text-slate-700">No listing found!</p>
          )}
          {loading && (
            <p className="text-xl text-slate-700 text-center w-100">
              Loading...
            </p>
          )}

          {!loading &&
            listings &&
            listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}
        </div>
      </div>
    </div>
  );
}
