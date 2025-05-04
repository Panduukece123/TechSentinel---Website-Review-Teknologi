import React, { useState } from 'react';
import { motion } from 'framer-motion'; // untuk animasi hurufnya
import { useInView } from 'react-intersection-observer'; // untuk deteksi scroll
import topLaptops2025 from '../data/topLaptops2025';

const Homepage = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/products?search=${searchInput}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error saat mencari produk:', error);
    }
  };

  // Hook Intersection Observer
  const { ref: chooseUsRef, inView: chooseUsInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,   
  });

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-4 text-center">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.5, ease: 'easeOut' }} 
        className="font-poppins text-white text-2xl mt-32 sm:text-4xl md:text-5xl font-semibold mb-4"
        style={{ lineHeight: '1.1' }}
      >
        Commitment to Objectivity
        and <br />Technology Accuracy
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="text-white text-sm sm:text-lg md:text-lg mb-8 max-w-5xl font-light"
      >
        Providing data-driven technology analysis to help facilitate the best choices for you
      </motion.p>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-md bg-white rounded-full overflow-hidden mb-12">
        <input
          type="text"
          placeholder="Search product..."
          className="w-full h-12 px-4 ml-2 text-gray-700 outline-none"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="flex items-center justify-center h-12 w- text-gray-700 hover:bg-gray-200"
          onClick={handleSearch}
        >
          {/* Icon Search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>
      </div>

      {/* Section Kategori: Headphone, Laptop, Phone */}
      <div
        className="w-full max-w-5xl mt-10 bg-white bg-opacity-5 border border-white border-opacity-80 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('/Background-4.2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-wrap justify-evenly sm:p-4 lg:p-6 w-full">

          {/* Headphone */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 border border-white border-opacity-80 backdrop-blur-md rounded-2xl sm:p-4 p-0 flex-1 sm:mx-4 mx-3 hover:scale-105 transition-transform"
            style={{
              boxShadow: '0px 8px 24px rgba(5, 5, 10, 0.4)'
            }}>
            <img src="/headphone-noBg3.png" alt="Headphone" className="w-50 h-50 mb-1 drop-shadow-2xl" />
            <h3 className="text-white text-lg font-semibold mb-5">Headphone</h3>
          </div>

          {/* Laptop */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 border border-white border-opacity-80 backdrop-blur-md rounded-2xl sm:p-4 p-0 flex-1 sm:mx-4 mx-3 hover:scale-105 transition-transform"
            style={{
              boxShadow: '0px 8px 24px rgba(5, 5, 10, 0.4)'
            }}>
            <img src="/laptop-noBg3.png" alt="Laptop" className="w-50 h-50 mb-1 drop-shadow-2xl" />
            <h3 className="text-white text-lg font-semibold mb-5">Laptop</h3>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-white bg-opacity-10 border border-white border-opacity-80 backdrop-blur-md rounded-2xl sm:p-4 p-0 flex-1 sm:mx-4 mx-3 hover:scale-105 transition-transform"
            style={{
              boxShadow: '0px 8px 24px rgba(5, 5, 10, 0.4)'
            }}>
            <img src="/phone-noBg3.png" alt="Phone" className="w-50 h-50 mb-1 drop-shadow-2xl" />
            <h3 className="text-white text-lg font-semibold mb-5">Phone</h3>
          </div>

        </div>
      </div>


      {/* Section Why Choose Us */}
      <div className="w-full max-w-5xl mt-10 text-justify sm:px-4 px-6 " ref={chooseUsRef}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }} // Awal: transparan dan turun 50px
          animate={{ opacity: chooseUsInView ? 1 : 0, y: chooseUsInView ? 0 : 50 }}   // Animasi ke: muncul dan posisi normal
          transition={{ duration: 0.8, ease: 'easeOut' }} // Durasi dan jenis easing
          className="font-poppins text-white text-2xl sm:text-4xl md:text-5xl mt-8 font-semibold mb-4"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: chooseUsInView ? 1 : 0, y: chooseUsInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="text-white text-sm sm:text-lg md:text-lg mb-8 max-w-5xl font-light"
        >
          We provide expert, data-driven reviews to help you make the best technology choices.
          Our comprehensive analysis ensures you get the most accurate, up-to-date information on products to help you decide with confidence. <br /><br />
          Why choose us? We don’t just give random recommendations, but rather ones based on deep data and knowledge of the latest technology. We are committed to providing honest and transparent information, with the goal of helping you make well-informed and wise decisions. 
        </motion.p>
      </div>


      {/* Section Popular Laptops */}
      <div className="w-full max-w-5xl mt-6 text-left sm:px-4 px-6">
        <h2 className="font-poppins text-white text-lg sm:text-4xl md:text-5xl mt-8 font-semibold mb-2">
          Some of the Popular Laptops Recently :
        </h2>
        <p className="text-white lg:text-xl sm:text-lg md:text-lg mb-2 max-w-5xl font-light">
          Check out some of the most popular laptops recently, loved by technology enthusiasts and professionals alike.
        </p>
      </div>



      {/* Card Section */}
      <div className="w-full max-w-5xl mt-10 bg-white bg-opacity-5 border border-white border-opacity-30 rounded-2xl overflow-x-auto">
        <div className="flex space-x-6 p-6 min-w-max">
          {topLaptops2025.map((laptop) => (
            <div
              key={laptop.id}
              className="flex-shrink-0 w-40 sm:w-56 md:w-64 bg-white bg-opacity-10 border border-white border-opacity-30 backdrop-blur-md rounded-2xl p-2 hover:scale-105 transition-transform text-left"
            >
              <img
                src={laptop.image}
                alt={laptop.name}
                className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4 drop-shadow-2xl"
              />
              <h3 className="text-sm ml-5 sm:text-base font-semibold text-white">{laptop.name}</h3>
              <p className="text-white font-bold ml-5 text-sm mt-1">{laptop.price}</p>
              <a
                href={laptop.link}
                className="inline-block mt-4 ml-5 mb-4 px-3 py-1 border border-white text-white text-sm rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Homepage;
