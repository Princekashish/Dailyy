import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/config/Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User authenticated: ", user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/create_account");
    } catch (err) {
      console.error("Error during Google login:", err);
      setError("Failed to login with Google. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-[90vh]">
      <div className="relative flex justify-center items-center">
        <img
          src="/loginview.png"
          alt=""
          className="object-cover w-full h-full"
        />
        <div className="flex absolute top-5 left-2 justify-start items-center p-2 gap-2 z-10 bg-black/10 rounded-full">
          <Link to={"/"}>
            <IoArrowBack className="text-white" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-start rounded-t-3xl bg-white">
        <div>
          <h1 className="text-2xl pl-5 p-2 font-semibold text-gray-700 mt-2">
            Signup & Login
          </h1>
        </div>

        <div className="w-full p-5 flex flex-col gap-8">
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg shadow-sm flex items-center justify-center gap-3 bg-white hover:bg-gray-50 transition-colors"
          >
            <FcGoogle size={24} />
            <span className="text-gray-700 font-medium">
              {loading ? "Signing in..." : "Continue with Google"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
