// src/components/WomenJeans.js

import React from "react"
import { dummydata } from "../assets/dummydata"

const WomenJeans = () => {
  const jeans = dummydata.filter(
    (item) => item.category === "Women" && item.type === "Jeans"
  )

  return (
    <div className="product-list">
      {jeans.map((jean) => (
        <div className="product" key={jean.id}>
          <img src={jean.image} alt={jean.name} />
          <h2>{jean.name}</h2>
          <p>{jean.description}</p>
          <p>{jean.price}</p>
        </div>
      ))}
    </div>
  )
}

export default WomenJeans
