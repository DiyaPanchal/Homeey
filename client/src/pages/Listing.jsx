import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import Contact from "../components/Contact";

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
   const [copied, setCopied] = useState(false);
   const [contact, setContact] = useState(false); 
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);


  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="container">
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Carousel>
            {listing.imageUrls.map((url) => (
              <Carousel.Item key={url}>
                <img
                  className="d-block w-100"
                  src={url}
                  alt="Listing Image"
                  style={{ maxHeight: "700px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
      <div
        className="position-fixed top-50 start-100 translate-middle border rounded-circle w-12 h-12 d-flex justify-content-center align-items-center bg-light cursor-pointer"
        style={{ right: "3%", top: "13%", zIndex: 10 }}
      >
        <FaShare
          className="text-primary"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        />
      </div>
      {copied && (
        <p
          className="position-fixed top-50 start-100 translate-middle p-2 rounded bg-light"
          style={{ right: "5%", top: "23%", zIndex: 10 }}
        >
          Link copied!
        </p>
      )}
      {listing && (
        <div className="max-width-4xl mx-auto p-3 my-7 gap-4 ">
          <p className="text-2xl font-weight-bold">
            {listing.name} - $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <p className="d-flex align-items-center mt-6 gap-2 text-muted text-sm">
            <FaMapMarkerAlt className="text-success" />
            {listing.address}
          </p>
          <div className="d-flex gap-4">
            <p className="bg-danger w-50 max-width-200px text-white text-center p-1 rounded">
              {listing.type === "rent" ? "For Rent" : "For Sale"}
            </p>
            {listing.offer && (
              <p className="bg-success w-100 max-width-200px text-white text-center p-1 rounded">
                ${+listing.regularPrice - +listing.discountPrice} OFF
              </p>
            )}
          </div>
          <p className="text-dark">
            <span className="font-weight-bold text-black">Description - </span>
            {listing.description}
          </p>
          <ul className="text-success font-weight-bold text-sm d-flex flex-wrap align-items-center gap-4 gap-sm-6">
            <li className="d-flex align-items-center gap-1">
              <FaBed className="text-lg" />
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </li>
            <li className="d-flex align-items-center gap-1">
              <FaBath className="text-lg" />
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </li>
            <li className="d-flex align-items-center gap-1">
              <FaParking className="text-lg" />
              {listing.parking ? "Parking spot" : "No Parking"}
            </li>
            <li className="d-flex align-items-center gap-1">
              <FaChair className="text-lg" />
              {listing.furnished ? "Furnished" : "Unfurnished"}
            </li>
          </ul>

          {currentUser && listing.userRef !== currentUser._id && !contact && (
            <button
              onClick={() => setContact(true)}
              className="btn btn-primary w-50 text-white mt-3"
            >
              Contact landlord
            </button>
          )}
          {contact && <Contact listing={listing} />}
        </div>
      )}
    </main>
  );
}
