import "./Footer.css";
import PufiFooter from "../../assets/pufiFooter.png";
import Security1 from "../../assets/purchase1.png";
import Security2 from "../../assets/purchase2.png";
import BrandLive from "../../assets/brandlive.png";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="container-footer">
      <section className="footer-info">
        <div className="pufi-logo-footer">
          <img src={PufiFooter} alt="Pufi-logo" />
        </div>

        <div className="pufi-product">
          <a href="#pufiRain">PUFI RAIN</a>
          <a href="#pufiPuff">PUFI PUFF</a>
          <a href="#pufiCart">PUFI CART</a>
          <a href="#pufiNap">PUFI NAP</a>
        </div>

        <div className="pufi-product">
          <a href="">CONTACTO</a>
          <a href="">AYUDA</a>
          <a href="">CÓMO COMPRAR</a>
          <a href="">TÉRMINOS & CONDICIONES</a>
        </div>

        <div className="buySecurity">
          <div>
            <span>COMPRA 100% SEGURA</span>
          </div>

          <div className="security">
            <img src={Security1} alt="" />
            <img src={Security2} alt="" />
            <p>COMPRÁ CON LA GARANTÍA DE PUFI</p>
          </div>
        </div>

        <div className="pufi-social">
          <h4>SEGUINOS EN</h4>
          <GrFacebookOption size={25} />
          <GrTwitter size={25} />
          <GrInstagram size={25} />
        </div>
      </section>

      <div className="copyRight">
        <h5> PUFI Copryright 2017 - Todos los derechos reservados</h5>
        <img src={BrandLive} alt="brandlive" />
      </div>
    </div>
  );
};

export { Footer };
