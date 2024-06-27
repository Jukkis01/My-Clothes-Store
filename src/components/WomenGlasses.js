// src/components/WomenGlasses.js

import React from "react"
import { dummydata } from "../assets/dummydata"
import "../App.css"

const WomenGlasses = () => {
  const glasses = dummydata.filter(
    (item) => item.category === "Women" && item.type === "Glasses"
  )

  return (
    <div className="product-list">
      {glasses.map((glass) => (
        <div key={glass.id} className="product">
          <img src={glass.image} alt={glass.name} className="product-image" />
          <h2>{glass.name}</h2>
          <p>Color: {glass.color}</p>
          <p>Price: {glass.price}</p>
          <p>{glass.description}</p>
        </div>
      ))}
    </div>
  )
}

export default WomenGlasses
