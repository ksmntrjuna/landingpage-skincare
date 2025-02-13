import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <div className="bg-driftwood">
      <Navbar />
      <Hero />
      <About />
      <ProductList />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
