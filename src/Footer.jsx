import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="bg-gray-700 h-[200px] text-center p-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/cottonLinkLogo.png"
              alt="Cotton Link Logo"
              className="w-12 h-12 rounded-full border-2 border-blue-400 shadow"
            />
            <span className="text-xl font-bold tracking-wide text-blue-200">
              Cotton Link
            </span>
          </div>
          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:office@cottonlink.net"
              className="hover:text-red-400 transition"
            >
              <SiGmail />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6">
          &copy; {new Date().getFullYear()} Cotton Link. All rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;