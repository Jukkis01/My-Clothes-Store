import React from "react";
import { dummydata } from "../assets/dummydata";
import "../App.css";

const MenTshirts = () => {
  const tshirts = dummydata.filter(
    (item) => item.category === "Men" && item.type === "Tshirts"
  );

  return (
    <div className="product-list">
      {tshirts.map((tshirt) => (
        <div key={tshirt.id} className="product">
          <img src={tshirt.image} alt={tshirt.name} className="product-image" />
          <h2>{tshirt.name}</h2>
          <p>Color: {tshirt.color}</p>
          <p>Price: {tshirt.price}</p>
          <p>{tshirt.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenTshirts;
