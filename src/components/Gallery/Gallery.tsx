import "./Gallery.css";
import Gallery1 from "../../assets/gallery1.jfif";
import Gallery2 from "../../assets/gallery2.jpg";
import Gallery3 from "../../assets/gallery3.jfif";
import Gallery4 from "../../assets/pufi-nap2.png";
import Gallery5 from "../../assets/gallery5.png";
import Gallery6 from "../../assets/gallery6.jpg";

const Gallery = () => {
  return (
    <div className="container-gallery">
      <div className="redes">
        <p>INSTAGRAM</p>
        <span>#ESPUFI</span>
      </div>

      <div className="gallery-image">
        <img src={Gallery1} alt="" />
        <img src={Gallery2} alt="" />
        <img src={Gallery3} alt="" />
        <img src={Gallery4} alt="" />
        <img src={Gallery5} alt="" />
        <img src={Gallery6} alt="" />
      </div>
    </div>
  );
};

export { Gallery };
