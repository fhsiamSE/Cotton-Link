import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn , FaWhatsapp} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import profileImage from '../assets/profileImage.jpg';


function About() {
    return (
        <div className="bg-white sm:h-[100%] md:h-[100%] rounded-lg m-10 p-10 mt-24 mb-24 shadow-2xl shadow-blue-950 flex flex-col md:flex-row items-center">
            <div className='p-6 flex-row gap-10'>
                <img className="w-[400px] h-[500px] rounded-lg"
                    src={profileImage}
                    alt="Profile"
                />
                <div className="bg-white shadow-2xl mt-[-20px] shadow-blue-950 h-[60px] w-[80%] max-w-[500px] mx-auto md:ml-10 relative">
                    <div className="flex justify-center items-center md:gap-6 gap-3 text-2xl pt-4 text-gray-600">
                        <a href='https://www.facebook.com/'><FaFacebookF /></a>
                        <a href='https://www.facebook.com/'><FaInstagram /></a>
                        <a href='https://www.facebook.com/'><FaLinkedinIn /></a>
                        <a href='https://www.facebook.com/'><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
            <div className="md:ml-10 mt-10 md:mt-0 text-center md:text-left md:w-2xl">
                <h1 className="text-4xl font-bold mb-4 text-blue-950">Founder Of Cotton Link</h1>
                <p className="text-lg text-gray-700 mb-4">
                    MD. Shazzad Hassain, professional in international trade and cotton sourcing, specializing in supplying high-quality raw cotton to spinning mills and textile manufacturers in Bangladesh. With over 20 years of experience in import-export management, supply chain optimization, and trade finance, I help businesses secure the best cotton from trusted global suppliers.
                    I co-founded Cotton Link in 2022 with a vision to deliver quality, consistency, and value in raw cotton procurement. Before that, I was a Managing Partner at CotLeaf, and earlier, served as Chief Commercial Officer (Imports & Exports) at a leading yarn manufacturing company.
                    My passion lies in building reliable supply chains, fostering long-term relationships with clients and suppliers, and contributing to the growth of Bangladesh’s textile sector through smart sourcing strategies.
           </p>
            </div>
        </div>
    )
}

export default About;
