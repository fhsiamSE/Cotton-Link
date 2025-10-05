import React from 'react';
import { FaAddressCard, FaLocationArrow } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className="bg-blend-color-burnn sm:h-[100%] md:h-[100%] rounded-lg m-10 p-10 mt-24 shadow-2xl shadow-blue-950">
      {/* Contact Title */}
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Contact</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center gap-10 text-2xl p-10 text-purple-600 w-full md:w-[40%]">
          <div className='group flex flex-row items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-purple-300 cursor-pointer'>
            <FaLocationArrow className="mt-1 text-purple-700 group-hover:text-purple-900 transition-colors duration-300" />
            <div className='flex flex-col items-start'>
              <div className='font-semibold text-gray-800 group-hover:text-purple-900 transition-colors duration-300'>
                Address
              </div>
              <div className='text-[13px] w-[200px] text-gray-600 group-hover:text-purple-800 transition-colors duration-300'>
                47/48 S. M. Maleh Road, Tanbazar,<br />
                Narayanganj - 1400, Bangladesh.
              </div>
            </div>
          </div>
          <div className='group flex flex-row items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-purple-300 cursor-pointer'>
            <FaAddressCard className="mt-1 text-purple-700 group-hover:text-purple-900 transition-colors duration-300" />
            <div className='flex flex-col items-start'>
              <div className='font-semibold text-gray-800 group-hover:text-purple-900 transition-colors duration-300'>
                Call me now
              </div>
              <div className='text-[13px] w-[200px] text-gray-600 group-hover:text-purple-800 transition-colors duration-300'>
                <div>+8801715-888-222</div>
              </div>
            </div>
          </div>
          <div className='group flex flex-row items-start gap-4 p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-purple-300 cursor-pointer'>
            <SiGmail className="mt-1 text-purple-700 group-hover:text-purple-900 transition-colors duration-300" />
            <div className='flex flex-col items-start'>
              <div className='font-semibold text-gray-800 group-hover:text-purple-900 transition-colors duration-300'>
                My Email
              </div>
              <div className='text-[13px] w-[200px] text-gray-600 group-hover:text-purple-800 transition-colors duration-300'>
                office@cottonlink.net
              </div>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full h-1/2 md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <iframe
            title="Cotton Link Address"
            src="https://www.google.com/maps?q=47/48+S.+M.+Maleh+Road,+Tanbazar,+Narayanganj+-+1400,+Bangladesh.&output=embed"
            width="100%"
            height="350"
            className="rounded-lg shadow-lg border-2 border-purple-200"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Contact;