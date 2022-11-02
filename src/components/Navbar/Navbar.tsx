import logo_adobe_express from "../../assets/logo.png";
import PufiRain from "../../assets/umbrella-write.svg";
import PufiPuff from "../../assets/puf.png";
import Shopping from "../../assets/shopping-bag.png";
import PufiNap from "../../assets/sleep.png";
import "./Navbar.css";

const Navbar = () => {
  const scrollToRain = () => {
    window.scroll({ top: 635, behavior: "smooth" });
  };

  const scrollToPuff = () => {
    window.scroll({ top: 1250, behavior: "smooth" });
  };

  const scrollToCart = () => {
    window.scroll({ top: 1850, behavior: "smooth" });
  };

  const scrollToNap = () => {
    window.scroll({ top: 2500, behavior: "smooth" });
  };

  return (
    <div className="container-navbar">
      <div className="container-logo">
        <img src={logo_adobe_express} alt="logoPufi" />
      </div>

      <div className="container-pufi">
        <div className="pufi" onClick={scrollToPuff}>
          <img src={PufiPuff} alt="Pufi Rain" />
          <h2>PUFI PUFF</h2>
        </div>
        <div className="pufi" onClick={scrollToRain}>
          <img src={PufiRain} alt="Pufi Rain" />
          <h2>PUFI RAIN</h2>
        </div>
        <div className="pufi" onClick={scrollToCart}>
          <img src={Shopping} alt="Pufi Cart" />
          <h2>PUFI CART</h2>
        </div>
        <div className="pufi" onClick={scrollToNap}>
          <img src={PufiNap} alt="Pufi Cart" />
          <h2>PUFI NAP</h2>
        </div>
      </div>

      <div className="container-user">
        <select>
          <option>Mi Cuenta</option>
          <option>Perfil</option>
        </select>
        <div className="separation"></div>
        <p>Mi Compra</p>
      </div>
    </div>
  );
};

export { Navbar };
