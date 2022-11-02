import "./App.css";
import { CarouselItem } from "./components/Carousel/Carousel";
import { Product } from "./components/Product/Product";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { Suscribite } from "./components/Suscribite/Suscribite";
import { DescriptionProduct } from "./components/DescriptionProduct/DescriptionProduct";
import UmbrellaSection from "./assets/umbrella-section.jpg";
import UmbrellaYellow from "./assets/yellow.png";
import PufiPuff from "./assets/pufi-puff.png";
import PufiPlaya from "./assets/PUFI-PLAYA.jpg";
import Shopping from "./assets/buy.png";
import Shopping2 from "./assets/shopping.png";
import PufiNap from "./assets/pufi-nap.png";
import PufiNap2 from "./assets/pufi-nap2.png";

function App() {
  return (
    <div className="app">
      <CarouselItem />
      <div className="section-row">
        <Product image={UmbrellaSection} button />
        <DescriptionProduct
          image={UmbrellaYellow}
          title="Pufi RAIN"
          description="Descripcion del producto. Este es un texto simulado."
          buttonInfo="> VER MAS"
        />
      </div>
      <div className="section-row">
        <DescriptionProduct
          image={PufiPuff}
          title="Pufi PUFF"
          description="Descripcion del producto. Este es un texto simulado."
          buttonInfo="> VER MAS"
        />
        <Product image={PufiPlaya} button={null} />
      </div>

      <div className="section-row">
        <Product image={Shopping2} button={null} />
        <DescriptionProduct
          image={Shopping}
          title="Pufi CART"
          description="Descripcion del producto. Este es un texto simulado."
          buttonInfo="> VER MAS"
        />
      </div>
      <div className="section-row">
        <DescriptionProduct
          image={PufiNap}
          title="Pufi NAP"
          description="Descripcion del producto. Este es un texto simulado."
          buttonInfo="> VER MAS"
        />
        <Product image={PufiNap2} button={null} />
      </div>
      <Gallery />
      <Suscribite />
      <Footer />
    </div>
  );
}

export default App;
