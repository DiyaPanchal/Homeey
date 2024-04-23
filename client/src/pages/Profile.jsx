import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };
 const handleShowListings = async () => {
   try {
     setShowListingsError(false);
     const res = await fetch(`/api/user/listings/${currentUser._id}`);
     const data = await res.json();
     if (data.success === false) {
       setShowListingsError(true);
       return;
     }

     setUserListings(data);
   } catch (error) {
     setShowListingsError(true);
   }
 };
 const handleListingDelete = async (listingId) => {
   try {
     const res = await fetch(`/api/listing/delete/${listingId}`, {
       method: "DELETE",
     });
     const data = await res.json();
     if (data.success === false) {
       console.log(data.message);
       return;
     }

     setUserListings((prev) =>
       prev.filter((listing) => listing._id !== listingId)
     );
   } catch (error) {
     console.log(error.message);
   }
 };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                ref={fileRef}
                hidden
                accept="image/*"
                className="form-control"
              />
              <img
                onClick={() => fileRef.current.click()}
                src={formData.avatar || currentUser.avatar}
                alt="profile"
                className="rounded-circle mb-2"
                style={{
                  width: "150px",
                  height: "150px",
                  cursor: "pointer",
                }}
              />
              <p className="text-sm">
                {fileUploadError ? (
                  <span className="text-danger">
                    Error Image upload (image must be less than 2 mb)
                  </span>
                ) : filePerc > 0 && filePerc < 100 ? (
                  <span className="text-muted">{`Uploading ${filePerc}%`}</span>
                ) : filePerc === 100 ? (
                  <span className="text-success">
                    Image successfully uploaded!
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>
            <input
              type="text"
              placeholder="Username"
              defaultValue={currentUser.username}
              id="username"
              className="form-control mb-3"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="current-password"
              defaultValue={currentUser.email}
              className="form-control mb-3"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              id="password"
              autoComplete="current-password"
              className="form-control mb-3"
            />
            <button
              disabled={loading}
              className="btn btn-primary w-100 btn-lg d-block mx-auto mt-3"
              type="submit"
            >
              {loading ? "Loading..." : "Update"}
            </button>
            <Link
              className="btn btn-success btn-lg d-block mx-auto mt-3"
              to={"/create-listing"}
            >
              Create Listing
            </Link>
          </form>
          <div className="d-flex justify-content-between mt-4">
            <span onClick={handleDeleteUser} className="text-danger">
              Delete Account
            </span>
            <span onClick={handleSignOut} className="text-danger">
              Sign out
            </span>
          </div>
          <p className="text-danger mt-4">{error ? error : ""}</p>
          <p className="text-success mt-4">
            {updateSuccess ? "User is updated successfully!" : ""}
          </p>
          <button
            onClick={handleShowListings}
            class="text-success btn btn-lg d-block mx-auto mt-3 "
          >
            Show Listings
          </button>
          <p class="text-danger mt-5">
            {showListingsError ? "Error showing listings" : ""}
          </p>

          {userListings && userListings.length > 0 && (
            <div class="d-flex flex-column gap-4">
              <h1 class="text-center mt-7 text-2xl font-weight-bold">
                Your Listings
              </h1>
              {userListings.map((listing) => (
                <div
                  key={listing._id}
                  class="border rounded-lg p-3 d-flex align-items-center gap-4"
                >
                  <Link to={`/listing/${listing._id}`}>
                    <img
                      src={listing.imageUrls[0]}
                      alt="listing cover"
                      class="h-16 w-16 object-fit"
                    />
                  </Link>
                  <Link
                    class="text-secondary font-weight-bold text-truncate flex-grow-1"
                    to={`/listing/${listing._id}`}
                  >
                    <p>{listing.name}</p>
                  </Link>
                  <div class="d-flex flex-column align-items-center">
                    <button
                      onClick={() => handleListingDelete(listing._id)}
                      class="btn btn-outline-danger "
                    >
                      Delete
                    </button>
                    
                    <Link to={`/update-listing/${listing._id}`}>
                      <button className="btn btn-outline-success">Edit</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
