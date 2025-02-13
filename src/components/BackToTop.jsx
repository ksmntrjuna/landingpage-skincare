import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Menangani scroll event untuk menampilkan tombol saat scroll lebih dari 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fungsi untuk menggulir ke atas saat tombol diklik
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-white p-1 hover:scale-110 transform duration-200 transition-all flex flex-col items-center space-y-1"
      >
        <div className="bg-amber-500 p-3 rounded-full">
          {" "}
          <FaArrowUp size={20} />
        </div>
        <span className="text-sm hidden sm:block">Back to Top</span>
      </button>
    )
  );
};

export default BackToTop;
