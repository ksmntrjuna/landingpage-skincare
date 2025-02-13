import fb from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import ig from "../assets/instagram.png";
import logo from "../assets/logo.png"; 

function Footer() {
  return (
    <footer className="border-t-4 text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 sm:w-32 sm:h-32"
          />{" "}
        </div>

        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold font-mono mb-2">Your Company</h3>
          <p className="text-sm mb-4">
            Jl. Lorem Ipsum no.1, Kota Example, Indonesia
          </p>

          {/* Social Media */}
          <div className="flex justify-center sm:justify-start gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:scale-110 transition duration-300"
            >
              <img src={fb} alt="Facebook" className="w-10 h-10" />
            </a>
            <a
              href="https://gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:scale-110 transition duration-300"
            >
              <img src={gmail} alt="Gmail" className="w-10 h-10" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 hover:scale-110 transition duration-300"
            >
              <img src={ig} alt="Instagram" className="w-10 h-10" />
            </a>
          </div>

          <p className="mt-2 text-sm text-white">&copy; 2025.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
