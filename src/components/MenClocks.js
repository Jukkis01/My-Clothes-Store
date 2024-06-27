import React from "react"
import { dummydata } from "../assets/dummydata"
import "../App.css"

const MenClocks = () => {
  const clocks = dummydata.filter(
    (product) => product.category === "Men" && product.type === "Clock"
  )

  return (
    <div>
      <h2>Men's Clocks</h2>
      <div className="product-list">
        {clocks.map((clock) => (
          <div key={clock.id} className="product">
            <img src={clock.image} alt={clock.name} className="product-image" />
            <h3>{clock.name}</h3>
            <p>{clock.description}</p>
            <p>Price: {clock.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenClocks
