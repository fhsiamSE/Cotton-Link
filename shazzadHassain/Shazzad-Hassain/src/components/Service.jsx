import React from "react";

function Services() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-blue-950 mb-4 text-center tracking-tight ">
       Services
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
        At Cotton Link, we provide comprehensive services designed to meet the raw
        cotton needs of spinning mills, textile manufacturers, and importers in
        Bangladesh. Our expertise ensures quality, reliability, and competitive
        pricing throughout the supply chain.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
          <span className="text-3xl font-bold text-blue-600 mb-2">1</span>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Raw Cotton Sourcing
          </h2>
          <p className="text-gray-600 text-center">
            We source premium raw cotton from trusted international suppliers,
            ensuring you get the highest quality fibers suitable for your
            production requirements.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
          <span className="text-3xl font-bold text-blue-600 mb-2">2</span>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Cotton Procurement Management
          </h2>
          <p className="text-gray-600 text-center">
            From selecting the right cotton variety to managing purchase
            contracts, we handle the entire procurement process to match your
            specific needs.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
          <span className="text-3xl font-bold text-blue-600 mb-2">3</span>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Trade Finance &amp; LC Support
          </h2>
          <p className="text-gray-600 text-center">
            We assist with Letter of Credit (LC) documentation and trade finance
            processes, helping streamline import transactions and ensuring smooth
            payment operations.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
          <span className="text-3xl font-bold text-blue-600 mb-2">4</span>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Supply Chain &amp; Logistics Coordination
          </h2>
          <p className="text-gray-600 text-center">
            Our team manages efficient logistics and shipping arrangements to
            guarantee timely delivery and hassle-free customs clearance.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
          <span className="text-3xl font-bold text-blue-600 mb-2">5</span>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Market Expansion &amp; Business Development
          </h2>
          <p className="text-gray-600 text-center">
            We support textile manufacturers in growing their operations by
            providing reliable cotton supply and strategic market insights.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl shadow-blue-200 p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-400">
          <span className="text-3xl font-bold text-blue-600 mb-2">6</span>
          <h2 className="text-xl font-semibold text-blue-900 mb-2 text-center">
            Customer Support &amp; Consultation
          </h2>
          <p className="text-gray-600 text-center">
            We offer ongoing consultation and customer service to ensure your
            continuous satisfaction and adapt to changing market demands.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;