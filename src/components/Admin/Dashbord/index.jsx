import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserAccount() {
  const [user, setUser] = useState(null); // Store user data
  const [name, setName] = useState(""); // State for name input
  const [email, setEmail] = useState(""); // State for email input
  const [gender, setGender] = useState(""); // State for gender input
  const [address, setAddress] = useState(""); // State for address input
  const [image, setImage] = useState(null); // State for image input
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      // If user is not logged in, redirect to login page
      navigate("/login");
    } else {
      setUser(storedUser);
      setEmail(storedUser.email); // Pre-fill email from user data
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Set image preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save or process the user's account info (e.g., to Firebase or database)
    console.log("User Info Submitted: ", { name, email, gender, address, image });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-semibold">User Account</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
          disabled
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        />
        <input type="file" onChange={handleImageChange} className="px-3 py-2 border border-gray-300 rounded-md" />
        {image && <img src={image} alt="Profile Preview" className="w-24 h-24 rounded-full mt-2" />}
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
