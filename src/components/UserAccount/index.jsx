import { X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function UserAccount() {
  const [user, setUser] = useState(null); // Store user data
  const [userProfile, setUserProfile] = useState({
    image: "",
    name: "",
    gender: "",
    address: "",
    email:"",
    dob: "", // Added dob to the userProfile state
  });
  const [image, setImage] = useState(null); // Store selected image
  const navigate = useNavigate();

  const clearImage = () => {
    setUserProfile({
      ...userProfile,
      image: "", // Reset the image
    });
  };

  // Check if the user is logged in (using phone number authentication)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      // If user is not logged in, redirect to login page
      navigate("/login");
    } else {
      setUser(storedUser);
      setUserProfile({
        ...storedUser,
        email: storedUser.email,
        dob: storedUser.dob,
      }); // Pre-fill profile fields from user data, including dob
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      // If the field is a file input, we need to handle it differently
      setUserProfile({
        ...userProfile,
        [name]: files[0], // Save the first selected file
      });
    } else {
      setUserProfile({
        ...userProfile,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Info Submitted: ", userProfile);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="top-0 w-full sticky ">
        <div className="flex absolute  left-2 justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
          <Link
            to={"/"}
            className="flex justify-center items-center gap-2 text-sm  "
          >
            <IoArrowBack size={20} />
          </Link>
        </div>

        <h1 className="text-xl font-semibold text-center">Your Profile</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-6 justify-start items-center w-full relative  h-[85vh]"
      >
        <div className="rounded-full border-2 border-black border-dotted  h-[120px] w-[120px] flex justify-center items-center">
          {userProfile.image ? (
            // If an image is selected, show the preview
            <div className="relative ">
              <img
                src={URL.createObjectURL(userProfile.image)}
                alt="Product Preview"
                className="w-full h-full object-contain rounded-xl"
              />
              <button
                onClick={clearImage}
                className="absolute bottom-0  bg-black/20 text-white rounded-full p-1"
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            // If no image is selected, show the file input
            <label
              htmlFor="fileInput"
              className="flex items-center space-x-2 cursor-pointer  "
            >
              <input
                id="fileInput"
                name="image"
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/jfif"
                onChange={handleInputChange}
                className="file:bg-gray-100 file:border-none file:rounded-xl hidden " // Hide input itself
              />
              <span className="text-black text-center text-xs">
                Upload Image
              </span>
            </label>
          )}
        </div>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userProfile.name}
          onChange={handleInputChange}
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        />

        {/* Phone number (read-only, since it is the auth method) */}
        <input
          type="text"
          name="phone"
          value={user?.phoneNumber || ""}
          disabled
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="date"
          name="dob"
          value={userProfile.dob}
          placeholder="Date of birth"
          onChange={handleInputChange}
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        />
        <input
          type="email"
          name="email"
          value={userProfile.email}
          placeholder="Email"
          onChange={handleInputChange}
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="Address"
          value={userProfile.address}
          onChange={handleInputChange}
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-3  absolute w-full bottom-0 rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
