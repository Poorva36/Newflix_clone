import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Signup = () => {
  const { user, signup } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/");
    } catch (error) {
      // console.log(error);
      alert(error);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix"
      />
      <div className="bg-black/60 fixed top-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>

            <form
              onSubmit={handleSignUp}
              className=" w-full flex flex-col"
              type=""
            >
              <input
                // onChange={(e) => {
                //   setEmail(e.target.value);
                // }}
                onChange={handleEmail}
                className="p-3 my-2 rounded bg-gray-700"
                type="email"
                placeholder="Enter your email"
              />
              <input
                onChange={handlePassword}
                className="p-3 my-2 rounded bg-gray-700"
                type="password"
                placeholder="Create new Password"
              />
              <button className=" bg-red-600 py-3 my-6 rounded font-bold">
                Sign Up
              </button>

              <div className=" flex justify-between items-center text-sm text-gray-500">
                <p>
                  <input className="mr-1" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className=" py-8 ">
                <span className="text-gray-500">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/login"> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
