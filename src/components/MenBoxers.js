import React from "react";
import { dummydata } from "../assets/dummydata";
import "../App.css";

const MenBoxers = () => {
  const boxers = dummydata.filter(
    (item) => item.category === "Men" && item.type === "Boxers"
  );

  return (
    <div className="product-list">
      {boxers.map((boxer) => (
        <div key={boxer.id} className="product">
          <img src={boxer.image} alt={boxer.name} className="product-image" />
          <h2>{boxer.name}</h2>
          <p>Color: {boxer.color}</p>
          <p>Price: {boxer.price}</p>
          <p>{boxer.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MenBoxers;
