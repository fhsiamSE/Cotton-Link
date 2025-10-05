import React from 'react';
import cotton from '../assets/cotton.jpeg';
import Logo from '../assets/cottonLinkLogo.png';
import video from '../assets/video.mp4';

function Home() {
    return (
        <>
            <div
                className="w-full h-full relative"
                style={{
                    backgroundImage: `url(${cotton})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}
            >
                <div className=" top-0 left-0 w-full h-full bg-black opacity-50 z-10 "></div>
                <div className="md:flex md:mt-20 mt-30 w-full  backdrop-blur-md bg-white/10 ">
                    <div className="p-8">
                        <div>
                            <img className='w-[20%] h-[20%] rounded-full mx-auto mb-4 mt-20 animate-bounce shadow-black shadow-2xl ' 
                            src={Logo} 
                            alt="Logo" />
                        </div>
                        <h1 className="text-6xl font-extrabold mb-4 text-center">{""} </h1>
                        <p className="text-md mb-6 font-stretch-75% text-xl mt-20 trxt-justify-cente ">
                            Cotton Link is a dynamic and steadily growing company specializing in the local representation of globally renowned raw cotton suppliers. Established in 2022, Cotton Link operates as a trusted bridge between international cotton producers and the textile industry of Bangladesh, particularly serving spinning mills and cotton importers across the country.

                            With a strong focus on quality, reliability, and service excellence, Cotton Link is committed to delivering premium-grade raw cotton that meets the diverse needs of modern textile manufacturing. Our company plays a vital role in supporting Bangladesh’s booming textile sector by ensuring a consistent supply of raw cotton, sourced from trusted international origins and delivered through efficient, well-managed supply chains.

                            Backed by an experienced leadership team with over two decades of industry expertise, Cotton Link combines deep market insight with strategic sourcing capabilities. We prioritize building long-term relationships with both suppliers and clients, offering competitive pricing, customized procurement solutions, and dependable delivery timelines.

                            In a fast-evolving textile landscape, Cotton Link stands out for its integrity, professionalism, and commitment to customer satisfaction. As we continue to grow and expand our market presence, we remain dedicated to being a reliable partner for the textile industry — delivering not just cotton, but confidence.                    </p>
                        <div className='flex justify-center mt-48'>
                            <a href="https://www.linkedin.com/in/shazzad-hassain-2b4a0215/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-bold">
                                    Say Helo!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex flex-row mt-20 mb-20'>
                <div className="h-48 w-48 bg-gradient-to-b from-purple-300 to-purple-100 mx-auto animate-pulse text-center p-16">
                    <div className='text-2xl text-bold'>22 Y.</div>
                    <h3>Experience</h3>
                </div>
                <div className="h-48 w-48 bg-gradient-to-b from-purple-300 to-purple-100 mx-auto animate-pulse text-center p-16">
                    <div className='text-2xl text-bold'>250+</div>
                    <h3>Projects Completed</h3>
                </div>
                <div className="h-48 w-48 bg-gradient-to-b from-purple-300 to-purple-100 mx-auto animate-pulse text-center p-16">
                    <div className='text-2xl text-bold'>100+</div>
                    <h3>Happy Clients</h3>
                </div>
            </div>
            <video autoPlay loop muted className=" top-0 left-0 w-full h-full object-cover z-0">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </>
    );
}
export default Home;