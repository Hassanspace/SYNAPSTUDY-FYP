import React from "react";
import linkedin from "../../assets/linkedin.svg"
import facebook from "../../assets/facebook.svg"
import X from "../../assets/X.svg"
import instagram from "../../assets/instagram.svg"
import yellowBlob from "../../assets/yellowblob.svg"; // replace with your image path
import blueBlob from "../../assets/blueblob.svg"; // replace with your image path
import logowhite from "../../assets/logowhite.svg"

const Footer = () => {
  return (
    <footer className="relative bg-[#075E54] text-white pt-20">
      {/* Background blobs */}
      <img
        src={yellowBlob}
        alt="yellow blob"
        className="absolute top-0 left-50 w-20 md:w-40 z-30 "
      />
      <img
        src={blueBlob}
        alt="blue blob"
        className="absolute top-50 right-30 w-20 md:w-40 z-30 "
      />

      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto  px-6 relative z-10">
        <div className="bg-[#053E37] rounded-3xl py-10 shadow-lg text-center relative h-60">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">SUBSCRIBE TO</h2>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">OUR NEWSLETTER</h2>

          {/* Input Box */}
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[120%] flex w-[90%] max-w-2xl bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 px-4 py-3 text-black outline-none"
            />
            <button className="bg-[#25D366] px-2 py-3 font-semibold text-white hover:bg-green-600 transition m-2 rounded-full">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 relative z-10">
        {/* Logo */}
        <div>
          <img className="w-48" src={logowhite} alt="" />
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold mb-4">MENU</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>HOME</li>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>TESTIMONIALS</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>ABOUT US</li>
            <li>PRIVACY POLICY</li>
            <li>TERMS OF SERVICE</li>
            <li>LOG IN</li>
            <li>SIGN UP</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">CONTACT</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>info@brainy.com</li>
            <li>+92 305 6787899</li>
            <li>Bank square market model town LHR</li>
          </ul>
        </div>
      </div>

      

      {/* Bottom Bar */}
      <div className=" border-t border-white flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 py-4 text-sm text-gray-300 relative z-10">
        <p>COPYRIGHT ALL RIGHT RESERVED</p>

        {/* Socials */}
<div className="flex space-x-1 mt-3 md:mt-0">
  <a href="#" className="p-2 rounded-full transition">
    <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
  </a>
  <a href="#" className="p-2 rounded-full   transition">
    <img src={facebook} alt="Facebook" className="w-12 h-12" />
  </a>
  <a href="#" className="p-2 rounded-full   transition">
    <img src={X} alt="Twitter" className="w-12 h-12" />
  </a>
  <a href="#" className="p-2 rounded-full   transition">
    <img src={instagram} alt="Instagram" className="w-12 h-12" />
  </a>
</div>

      </div>
    </footer>
  );
};

export default Footer;
