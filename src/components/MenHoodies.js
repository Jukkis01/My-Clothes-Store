// src/components/MenHoodies.js

import React from "react"
import { dummydata } from "../assets/dummydata"
import "../App.css"

const MenHoodies = () => {
  const hoodies = dummydata.filter(
    (item) => item.category === "Men" && item.type === "Hoodie"
  )

  return (
    <div className="product-list">
      {hoodies.map((hoodie) => (
        <div key={hoodie.id} className="product">
          <img src={hoodie.image} alt={hoodie.name} className="product-image" />
          <h2>{hoodie.name}</h2>
          <p>Color: {hoodie.color}</p>
          <p>Price: {hoodie.price}</p>
          <p>{hoodie.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MenHoodies
