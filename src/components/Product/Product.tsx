import React from "react";
import "./Product.css";

type Props = {
  image: any;
  button: any;
};

const Product: React.FC<Props> = (props) => {
  return (
    <div className="container-product">
      <img src={props.image} alt="ProductUmbrella"></img>
      {props.button && <button>SHOP</button>}
    </div>
  );
};

export { Product };
