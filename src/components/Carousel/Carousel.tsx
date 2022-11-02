import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/puffCollage2.jpg";
import Image3 from "../../assets/image3.jpg";
import { Navbar } from "../Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselItem() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-carousel">
      <Navbar />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 img" src={Image3} alt="First slide" />
          <Carousel.Caption>
            <h3>
              Estar cómodo,
              <br /> nunca fue tan fácil.
            </h3>
            <button>SHOP</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={Image3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 img" src={Image2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export { CarouselItem };
