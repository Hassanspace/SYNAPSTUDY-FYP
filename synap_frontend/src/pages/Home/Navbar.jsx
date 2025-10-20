import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/BRAINY.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 👇 Check login status on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // 👇 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="fixed top-6 left-0 right-0 mx-4 bg-white shadow-md rounded-[22px] z-50 h-24">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/features" className="hover:text-black">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link to="/testimonials" className="hover:text-black">
            Testimonials
          </Link>
          <Link to="/app" className="hover:text-black">
            App Download
          </Link>
          <Link to="/contact" className="hover:text-black">
            Contact Us
          </Link>

          {/* Conditionally Render Buttons */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="h-14 w-28 flex justify-center items-center border border-green-500 text-green-600 px-4 py-2 rounded-[12px] hover:bg-green-50 transition"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="h-14 w-28 flex justify-center items-center bg-gradient-to-r from-green-400 to-purple-500 text-white px-5 py-2 rounded-[12px] hover:opacity-90 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 font-semibold">
                Hello, {user.username || user.email?.split("@")[0] || "User"} 👋
              </span>

              <button
                onClick={handleLogout}
                className="h-12 w-28 flex justify-center items-center border border-red-500 text-red-600 px-4 py-2 rounded-[12px] hover:bg-red-50 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pt-4 pb-6 font-medium text-gray-700 bg-white rounded-[22px] shadow-md">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/features" className="hover:text-black">
            Features
          </Link>
          <Link to="/pricing" className="hover:text-black">
            Pricing
          </Link>
          <Link to="/testimonials" className="hover:text-black">
            Testimonials
          </Link>
          <Link to="/app" className="hover:text-black">
            App Download
          </Link>
          <Link to="/contact" className="hover:text-black">
            Contact Us
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="border border-green-500 text-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-green-400 to-purple-500 text-white px-5 py-2 rounded-full hover:opacity-90 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-800 font-semibold">
                Hello, {user.username} 👋
              </span>
              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-600 px-4 py-2 rounded-full hover:bg-red-50 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
