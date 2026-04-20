const Footer = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section with Image */}


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="text-center lg:text-left">
            <img
              src="/images/pnnlg.png"
              alt="PT Prima Nabati Nusantara"
              className="h-24 sm:h-28 lg:h-32 w-auto object-contain mx-auto lg:mx-0 mb-4 drop-shadow-[0_0_3px_#fff]"
            />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold text-primary-light mb-1">Jakarta:</div>
                  <span className="text-sm">Jl. Letjen S. Parman No.Kav. 28, RT.12/RW.7, Petamburan, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11440</span>
                </div>
              </li>

              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:089679392263" className="hover:text-primary-light">0896-7939-2263</a>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#beranda" className="hover:text-primary-light">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-primary-light">Tentang Kami</a></li>
              <li><a href="#produk" className="hover:text-primary-light">Produk</a></li>
              <li><a href="#galeri" className="hover:text-primary-light">Galeri</a></li>
              <li><a href="#testimoni" className="hover:text-primary-light">Testimoni</a></li>
              <li><a href="#blog" className="hover:text-primary-light">Blog</a></li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lokasi</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.660574004469!2d106.79192809999999!3d-6.1761737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7f745db9965%3A0xdd72af6266607f89!2sAPL%20Tower%20Central%20Park!5e0!3m2!1sid!2sid!4v1776669344564!5m2!1sid!2sid"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} PT Prima Nabati Nusantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
