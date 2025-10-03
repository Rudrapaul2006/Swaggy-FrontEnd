import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
        
        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">About</a></li>
            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
            <li><a href="#" className="hover:text-orange-500">Team</a></li>
            <li><a href="#" className="hover:text-orange-500">Swaggy Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
            <li><a href="#" className="hover:text-orange-500">Partner with us</a></li>
            <li><a href="#" className="hover:text-orange-500">Ride with us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social & App Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#"><FaFacebookF className="hover:text-orange-500" /></a>
            <a href="#"><FaTwitter className="hover:text-orange-500" /></a>
            <a href="#"><FaInstagram className="hover:text-orange-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-orange-500" /></a>
          </div>
          <div className="space-y-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-36 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="w-36 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Swaggy · Made with ❤️ for foodies
      </div>
    </footer>
  )
}

export default Footer
