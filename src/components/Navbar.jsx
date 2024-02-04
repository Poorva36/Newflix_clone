import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-between p-4 w-full absolute z-[100] items-center">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/Account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 cursor-pointer
         rounded text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="text-white pr-4">Sign In</button>
          </Link>

          <Link to="/SignUp">
            <button
              className="bg-red-600 px-6 py-2 cursor-pointer
         rounded text-white"
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
