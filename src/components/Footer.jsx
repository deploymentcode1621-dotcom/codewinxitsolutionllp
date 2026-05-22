"use client";

import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY LOGO & BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/cwxlogo.png"
                alt="CodeWinX Logo"
                width={70}
                height={70}
              />
              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  CodeWinX
                </h2>
                <p className="text-sm text-gray-400">
                  We Code, You Win.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              CodeWinX IT Solutions delivers high-quality web, software
              and digital solutions that help businesses grow faster
              and smarter.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#career" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Web Development</li>
              <li>Software Development</li>
              <li>UI / UX Design</li>
              <li>Internship & Training</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          {/* CONTACT & SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

            <p className="text-sm text-gray-300 mb-4">
              📧 codewinxit@gmail.com <br />
              📞 +91 9XXXXXXXXX
            </p>

            {/* SOCIAL MEDIA ICONS */}
            <div className="flex gap-5 text-2xl">
              <a href="#" className="text-green-400 hover:scale-125 transition">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-white hover:scale-125 transition">
                <FaXTwitter />
              </a>
              <a href="#" className="text-pink-400 hover:scale-125 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-sky-400 hover:scale-125 transition">
                <FaTelegramPlane />
              </a>
              <a href="#" className="text-blue-400 hover:scale-125 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CodeWinX IT Solutions. All rights reserved.
        </div>
      </footer>

      
    </>
  );
}
