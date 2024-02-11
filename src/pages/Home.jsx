import React from "react";
import Navbar from "../component/Navbar";
import Service from "./Service";
import About from "./About";
import FpebLogo from "../assets/FpebLogo.png";
import GedungFpeb from "../assets/GedungFpeb.png";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-orange-600">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Subbag Umum Perlengkapan Fakultas Pendidikan Ekonomi dan Bisnis
          </h1>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-amber-500 border-0 py-1 px-4 focus:outline-none hover:bg-orange-700 rounded text-lg">
              Login
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-2 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Layanan Kami
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Gedung FPEB"
            src={GedungFpeb}
          />
        </div>
      </div>
      <Service />
      <About />
    </div>
  );
};

export default Home;
