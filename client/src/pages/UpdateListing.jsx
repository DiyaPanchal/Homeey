import React, { useEffect } from "react";
import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const params = useParams();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    type: "rent",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 
  useEffect(()=>{
    const fetchListing = async ()=>{
       const listingId = params.listingId;
       const res = await fetch(`/api/listing/get/${listingId}`);
       const data = await res.json();
       if(data.success === false){
        console.log(data.message);
        return;
       }
       setFormData(data);
    };
    fetchListing();

  },[]);
  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };
  const handleChange = (e) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/listing/update/${params.listingId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <main className="container p-5">
      <h1 className="text-center mb-5">Update a Listing</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Enter description"
            required
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            required
            onChange={handleChange}
            value={formData.address}
          />
        </div>
        <div className="mb-3">
          <p>Options:</p>
          <div className="form-check">
            <input
              type="checkbox"
              id="sale"
              className="w-5 form-check-input"
              onChange={handleChange}
              checked={formData.type === "sale"}
            />
            <label className="form-check-label" htmlFor="sale">
              Sell
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="rent"
              className="form-check-input w-5"
              onChange={handleChange}
              checked={formData.type === "rent"}
            />
            <label className="form-check-label" htmlFor="rent">
              Rent
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="parking"
              className="w-5 form-check-input"
              onChange={handleChange}
              checked={formData.parking}
            />
            <label className="form-check-label" htmlFor="parking">
              Parking spot
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="furnished"
              className="w-5 form-check-input"
              onChange={handleChange}
              checked={formData.furnished}
            />
            <label className="form-check-label" htmlFor="furnished">
              Furnished
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              id="offer"
              className="form-check-input w-5"
              onChange={handleChange}
              checked={formData.offer}
            />
            <label className="form-check-label" htmlFor="offer">
              Offer
            </label>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label htmlFor="bedrooms" className="form-label">
                Bedrooms
              </label>
              <input
                type="number"
                className="form-control"
                id="bedrooms"
                min="1"
                max="10"
                required
                onChange={handleChange}
                value={formData.bedrooms}
              />
            </div>
            <div className="col">
              <label htmlFor="bathrooms" className="form-label">
                Bathrooms
              </label>
              <input
                type="number"
                className="form-control"
                id="bathrooms"
                min="1"
                max="10"
                required
                onChange={handleChange}
                value={formData.bathrooms}
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label htmlFor="regularPrice" className="form-label">
                Regular price
              </label>
              {formData.type === "rent" && (
                <span className="text-xs">($ / month)</span>
              )}
              <input
                type="number"
                className="form-control"
                id="regularPrice"
                min="50"
                max="10000000"
                required
                onChange={handleChange}
                value={formData.regularPrice}
              />
            </div>

            {formData.offer && (
              <div class="col">
                <label htmlFor="regularPrice" className="form-label">
                  Discounted price
                </label>
                {formData.type === "rent" && (
                  <span className="text-xs">($ / month)</span>
                )}
                <input
                  type="number"
                  id="discountPrice"
                  min="0"
                  max="10000000"
                  required
                  className="form-control "
                  onChange={handleChange}
                  value={formData.discountPrice}
                />
              </div>
            )}
          </div>
        </div>

        <div class="d-flex flex-column flex-grow-1 gap-4">
          <p class="font-weight-bold mb-0">
            Images:
            <span class="text-muted font-weight-normal ms-2">
              The first image will be the cover (max 6)
            </span>
          </p>

          <div class="d-flex gap-4">
            <input
              onChange={(e) => setFiles(e.target.files)}
              class="form-control p-3 border rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              disabled={uploading}
              onClick={handleImageSubmit}
              class="btn btn-outline-success btn-lg rounded uppercase"
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
        <p class="text-danger small">{imageUploadError && imageUploadError}</p>
        {formData.imageUrls.length > 0 &&
          formData.imageUrls.map((url, index) => (
            <div
              key={url}
              class="d-flex justify-content-between align-items-center p-3 border"
            >
              <img
                src={url}
                alt="listing image"
                class="w-20 h-20 object-fit rounded-lg"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                class="btn btn-outline-danger "
              >
                Delete
              </button>
            </div>
          ))}

        <button
          disabled={loading || uploading}
          className="btn btn-primary btn-lg mt-5 w-100  "
        >
          {loading ? "Updating..." : "UPDATE LISTING"}
        </button>
        {error && <p className="text-red-700 text-sm">{error}</p>}
      </form>
    </main>
  );
}
