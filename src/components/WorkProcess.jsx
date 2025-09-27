function WorkProcess() {
    return (
        <>
            <div className="  rounded-lg m-10 p-10 items-center">
                <p className='text-4xl font-bold text-center text-blue-950'>
                    Work Process
                </p>
                <p className='text-md text-center mt-4'>
                    Over 22 years in the cotton industry, I’ve developed a streamlined and reliable work process that ensures quality, transparency, and efficiency at every step.
                </p>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center items-stretch'>
                <div className='bg-white rounded-lg p-10 shadow-2xl shadow-blue-950 flex flex-col m-4 w-full max-w-xs hover:scale-105 transform transition duration-300'>
                    <p className='text-2xl font-bold text-center text-blue-950'>
                        Understand & Source
                    </p>
                    <p className='text-md text-center mt-4'>
                        We start by understanding your specific cotton requirements and then source premium quality raw cotton from trusted international suppliers.
                    </p>
                </div>
                <div className='bg-white rounded-lg p-10 shadow-2xl shadow-blue-950 flex flex-col m-4 w-full max-w-xs hover:scale-105 transform transition duration-300'>
                    <p className='text-2xl font-bold text-center text-blue-950'>
                        Negotiate & Manage Documentation
                    </p>
                    <p className='text-md text-center mt-4'>
                        We provide competitive pricing, handle negotiations, and assist with all necessary Letter of Credit (LC) and trade documentation.
                    </p>
                </div>

                <div className='bg-white rounded-lg p-10 shadow-2xl shadow-blue-950 flex flex-col m-4 w-full max-w-xs hover:scale-105 transform transition duration-300'>
                    <p className='text-2xl font-bold text-center text-blue-950'>
                        Logistics & Delivery
                    </p>
                    <p className='text-md text-center mt-4'>
                        We coordinate shipping and logistics to ensure timely delivery, followed by ongoing client support to guarantee satisfaction.                    </p>
                </div>
            </div>

        </>

    )
}
export default WorkProcess;