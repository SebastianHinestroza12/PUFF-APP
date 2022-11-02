import React from "react";
import "./DescriptionProduct.css";

type Props = {
  image: any;
  title: string;
  description: string;
  buttonInfo: string;
};

const DescriptionProduct: React.FC<Props> = (props) => {
  return (
    <div className="Description">
      <img src={props.image} alt="Description"></img>
      <h1>{props.title}</h1>
      <hr />
      <p>{props.description}</p>
      <button>{props.buttonInfo}</button>
    </div>
  );
};

export { DescriptionProduct };
