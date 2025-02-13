import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk menutup menu setelah item diklik
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-14" />
        </div>

        {/* Navigasi Desktop */}
        <div className="space-x-6 hidden md:flex">
          <a href="#home" className="text-white font-mono">
            Beranda
          </a>
          <a href="#about" className="text-white font-mono">
            Tentang Kami
          </a>
          <a href="#product" className="text-white font-mono">
            Produk
          </a>
        </div>

        {/* Menu Hamburger untuk layar kecil */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu untuk layar kecil */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-none p-4`}
      >
        <a
          href="#home"
          onClick={handleMenuClick}
          className="block text-white font-mono p-2"
        >
          Beranda
        </a>
        <a
          href="#about"
          onClick={handleMenuClick}
          className="block text-white font-mono p-2"
        >
          Tentang Kami
        </a>
        <a
          href="#product"
          onClick={handleMenuClick}
          className="block text-white font-mono p-2"
        >
          Produk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
