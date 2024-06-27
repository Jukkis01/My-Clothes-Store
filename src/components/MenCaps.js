import React from "react";
import { dummydata } from "../assets/dummydata";
import "../App.css";

const MenCaps = () => {
  const caps = dummydata.filter(
    (item) => item.category === "Men" && item.type === "Caps"
  );

  return (
    <div className="product-list">
      {caps.map((cap) => (
        <div key={cap.id} className="product">
          <img src={cap.image} alt={cap.name} className="product-image" />
          <h2>{cap.name}</h2>
          <p>Color: {cap.color}</p>
          <p>Price: {cap.price}</p>
          <p>{cap.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenCaps;
