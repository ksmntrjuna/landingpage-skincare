import { FaShoppingCart } from "react-icons/fa";

const BuyButton = ({ product }) => {
  const phoneNumber = "6285157679550";

  const generateWhatsAppLink = () => {
    const message = `Halo, saya ${"[Nama Pembeli]"} ingin memesan ${
      product.name
    }. \n\nHarga: Rp ${product.price.toLocaleString()} \n\nAlamat Pengiriman: [Isi alamat di sini] \n\nMetode Pembayaran:\n- Bank BRI: 11111\n- Bank BNI: 1111\n- Bank Mandiri: 1111\n- DANA: 08888888\n\nPilih Pembayaran: [Isi pilihan pembayaran di sini]`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600"
    >
      <FaShoppingCart className="mr-4" /> Beli
    </a>
  );
};

export default BuyButton;
