import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/config/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function Login() {
  const [phone, setPhone] = useState(""); // state to manage phone number input
  const [verificationCode, setVerificationCode] = useState(""); // state to manage verification code
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false); // flag to manage OTP sending status
  const [loading, setLoading] = useState(false); // loading state for button
  const [error, setError] = useState(""); // state to manage error messages

  // Handle sending OTP
  const sendOtp = async () => {
    setLoading(true);
    setError(""); // Clear previous error

    // Validate phone number length and ensure it only contains digits
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      setLoading(false);
      return;
    }

    // Prepend +91 to the phone number
    const fullPhoneNumber = "+91" + phone;

    // Initialize RecaptchaVerifier
    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container", // Element ID where reCAPTCHA should be rendered
        {
          size: "invisible", // Use invisible reCAPTCHA
          callback: (response) => {
            console.log("ReCAPTCHA solved:", response); // Optional callback
          },
          "expired-callback": () => {
            console.log("ReCAPTCHA expired"); // Optional callback for reCAPTCHA expiration
          },
        }
      );

      // Make sure to call the `render()` method
      await recaptchaVerifier.render();

      // Send OTP
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        fullPhoneNumber,
        recaptchaVerifier
      );
      window.confirmationResult = confirmationResult; // Store confirmation result
      setIsOtpSent(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to send OTP. Please try again.");
      setLoading(false);
      console.log(fullPhoneNumber);
    }
  };

  // Handle OTP verification
  const verifyOtp = () => {
    setLoading(true);
    setError(""); // Clear previous error

    window.confirmationResult
      .confirm(verificationCode)
      .then((result) => {
        const user = result.user;
        console.log("User authenticated: ", user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/create_account");
      })
      .catch((error) => {
        console.error("Error during OTP verification:", error);
        setError("Invalid OTP. Please try again.");
        setLoading(false);
      });
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
            <IoArrowBack />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-start  rounded-t-3xl bg-white">
        <div>
          <h1 className="text-2xl pl-5 p-2 font-semibold text-gray-700">
            Signup & Login
          </h1>
        </div>

        <div className="w-full p-5 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <input
              type="text"
              className="w-full px-3 py-3 outline-none border border-gray-300 rounded-lg shadow-md"
              placeholder="Enter your 10-digit phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10} // Limit input to 10 digits
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          {isOtpSent ? (
            <>
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  className="w-full px-3 py-3 outline-none border border-gray-300 rounded-lg shadow-md"
                  placeholder="Enter OTP"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
              <button
                onClick={verifyOtp}
                className="w-full px-3 py-3 outline-none border bg-blue-500 text-white border-blue-500 rounded-lg"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          ) : (
            <button
              onClick={sendOtp}
              className="w-full px-3 py-3 outline-none border bg-blue-500 text-white border-blue-500 rounded-lg"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          )}
        </div>
      </div>

      <div id="recaptcha-container" />
    </div>
  );
}
