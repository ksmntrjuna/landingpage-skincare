import { Typewriter } from "react-simple-typewriter";
import productImage from "../assets/produk3.png";
import bg from "../assets/pola1.png";
import { MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="border-t-2 border-b-2 border-white flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      <div className="md:w-1/2 text-center p-6 rounded-lg min-h-[400px] flex flex-col justify-center relative">
        {/* Background terpisah agar hanya background yang bergetar */}
        <div
          className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat animate-[custom-shake_3s_infinite]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        {/* Konten teks */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white">
            <Typewriter
              words={["Your Company."]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-mono font-semibold text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-mono text-white flex items-center justify-center gap-2">
            <MapPin size={24} className="text-white" /> Jl. Lorem Ipsum no.1,
            Kota Example, Indonesia
          </p>
        </div>
      </div>

      {/* Gambar Produk */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={productImage}
          alt="Product"
          className="w-full max-w-xs md:max-w-md rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
