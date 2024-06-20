// src/components/MenJeans.js

import React from "react"
import { dummydata } from "../assets/dummydata"
import "../App.css"

const MenJeans = () => {
  const jeans = dummydata.filter(
    (item) => item.category === "Men" && item.type === "Jeans"
  )

  return (
    <div className="product-list">
      {jeans.map((jean) => (
        <div key={jean.id} className="product">
          <img src={jean.image} alt={jean.name} className="product-image" />
          <h2>{jean.name}</h2>
          <p>Color: {jean.color}</p>
          <p>Price: {jean.price}</p>
          <p>{jean.description}</p>
        </div>
      ))}
    </div>
  )
}

export default MenJeans
