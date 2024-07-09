import BannerApp from "./components/BannerApp/BannerApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import Services from "./components/services/services";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <BannerApp />
      <Footer />
    </div>
  );
};

export default App;
