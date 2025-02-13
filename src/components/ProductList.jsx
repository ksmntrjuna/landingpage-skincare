import produk from "../assets/produk.jpg";
import BuyButton from "./BuyButton";
import LikeButton from "./LikeButton";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Produk 1",
      price: 150000,
      image: produk,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Produk 2",
      price: 120000,
      image: produk,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Produk 3",
      price: 100000,
      image: produk,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Produk 4",
      price: 100000,
      image: produk,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      name: "Produk 5",
      price: 100000,
      image: produk,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      name: "Produk 6",
      price: 100000,
      image: produk,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section id="product" className="py-16 px-4 md:px-8">
      <div className="container mx-auto text-center p-6">
        <h2 className="text-4xl font-semibold font-mono mb-8 text-amber-600">
          Produk Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-black rounded-lg overflow-hidden hover:border-amber-500"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110 hover:opacity-80"
              />

              <h3 className="text-xl font-semibold mb-2 font-mono">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {product.description}
              </p>
              <p className="text-lg text-green-600 font-semibold font-mono mb-4">
                Rp {product.price.toLocaleString()}
              </p>
              <div className="flex justify-between items-center px-4 pb-4">
                <LikeButton productId={product.id} />
                <BuyButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
