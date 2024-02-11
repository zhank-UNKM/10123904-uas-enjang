import React from "react";
import Navbar from "../component/Navbar";
import Jadwal from "../assets/Jadwal.svg";
import Permintaan from "../assets/Permintaan.svg";
import Pemeliharaan from "../assets/Pemeliharaan.svg";
const Service = () => {
  return (
    <section className="text-gray-600 body-font">
      <Navbar />
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 mb-4 justify-center py-6 ">
          Layanan Kami
        </h1>
        <div className="flex flex-wrap -m-4 py-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center border border-gray-300 "
                src={Jadwal}
                alt="Jadwal Image"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Peminjaman Ruangan
                </h1>
                <p className="leading-relaxed mb-3 justify-center">
                  Dengan senang hati kami menyediakan layanan peminjaman dan
                  penjadwalan ruangan. Mulai dari auditorium yang luas dan
                  nyaman, ruang kelas yang dilengkapi dengan fasilitas modern,
                  hingga laboratorium yang dilengkapi dengan peralatan untuk
                  mendukung kegiatan akademis dan riset. Kami menawarkan
                  fleksibilitas dalam penjadwalan untuk memenuhi kebutuhan
                  acara-acara seperti seminar, kuliah umum, workshop, serta
                  kegiatan akademis dan penelitian lainnya.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={Permintaan}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Permintaan Barang
                </h1>
                <p className="leading-relaxed mb-3">
                  Dengan senang hati, kami siap memberikan pelayanan untuk
                  kebutuhan barang seperti alat tulis kantor (ATK), peralatan
                  komputer, dan peralatan pendukung lainnya kepada staf dan
                  dosen di Fakultas FPEB. Mulai dari pulpen hingga printer, dari
                  kertas hingga keyboard, kami siap mendukung kegiatan pekerjaan
                  akademik dan non-akademik di Fakultas FPEB dengan efisien dan
                  efektif.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={Pemeliharaan}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Pemeliharaan Sarana dan Prasarana
                </h1>
                <p className="leading-relaxed mb-3">
                  Kami memiliki komitmen tinggi dalam pemeliharaan sarana dan
                  prasarana, termasuk gedung dan fasilitas lainnya. Tim
                  pemeliharaan kami terlatih secara profesional untuk memastikan
                  bahwa setiap aspek infrastruktur kami tetap dalam kondisi
                  optimal. Dengan pendekatan proaktif, kami melakukan perawatan
                  rutin dan perbaikan yang diperlukan agar semua fasilitas dapat
                  berfungsi dengan baik. Kebersihan, keamanan, dan kenyamanan
                  lingkungan adalah prioritas kami, demi memberikan pengalaman
                  yang positif dan nyaman bagi semua pengguna fasilitas.
                </p>
                <div className="flex items-center flex-wrap ">
                  <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
