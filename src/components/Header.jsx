import React from "react";
import logo from "../assets/cottonLinkLogo.png";

function Header({ activeSection, onNavClick }) {
    return (
      <div className="fixed top-0 left-0 w-full items-center p-4 flex flex-col md:flex-row md:justify-between bg-white   z-100">
            <div className="md:flex items-center mb-4 md:mb-0">
                <img src={logo} alt="Logo" className="w-32 h-16 mr-4 rounded-lg" />
            </div>
            
                <div className="flex md:gap-8 sm:gap-8 gap-4 md:justify-end sm:justify-center text-black md:text-lg sm:text-sm font-semibold ">
                    <div
                        className={`hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer md:px-4 md:py-2 ${activeSection === 'home' ? 'bg-purple-600 text-white' : ''}`}
                        onClick={() => onNavClick('home')}
                    >
                        Home
                    </div>
                    <div
                        className={`hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer md:px-4 md:py-2 ${activeSection === 'about' ? 'bg-purple-600 text-white' : ''}`}
                        onClick={() => onNavClick('about')}
                    >
                        Founder
                    </div>
                    <div
                        className={`hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer md:px-4 md:py-2 ${activeSection === 'workprocess' ? 'bg-purple-600 text-white' : ''}`}
                        onClick={() => onNavClick('workprocess')}
                    >
                        Process
                    </div>
                    <div
                        className={`hover:bg-purple-600 hover:text-white rounded-lg cursor-pointer md:px-4 md:py-2 ${activeSection === 'services' ? 'bg-purple-600 text-white' : ''}`}
                        onClick={() => onNavClick('services')}
                    >
                        Services
                    </div>
                    <div
                        className={`md:bg-purple-600 md:text-white md:px-4 md:py-2 rounded-lg hover:bg-purple-900 cursor-pointer ${activeSection === 'contact' ? 'bg-purple-600 text-white' : ''}`}
                        onClick={() => onNavClick('contact')}
                    >
                        Contact
                    </div>
                </div>
            </div>
       
    );
}
export default Header;