import React from "react";
import { dummydata } from "../assets/dummydata";
import "../App.css";

const MenSweaters = () => {
  const sweaters = dummydata.filter(
    (item) => item.category === "Men" && item.type === "Sweaters"
  );

  return (
    <div className="product-list">
      {sweaters.map((sweater) => (
        <div key={sweater.id} className="product">
          <img
            src={sweater.image}
            alt={sweater.name}
            className="product-image"
          />
          <h2>{sweater.name}</h2>
          <p>Color: {sweater.color}</p>
          <p>Price: {sweater.price}</p>
          <p>{sweater.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenSweaters;
