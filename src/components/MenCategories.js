// src/components/MenCategories.js

import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

const MenCategories = () => (
  <div className="category-list">
    <h2>Men's Categories</h2>
    <div className="product-categories">
      <div className="category">
        <Link to="/products/men/jeans">Jeans</Link>
      </div>
      <div className="category">
        <Link to="/products/men/sweaters">Sweaters</Link>
      </div>
      <div className="category">
        <Link to="/products/men/hoodies">Hoodies</Link>
      </div>
      <div className="category">
        <Link to="/products/men/t-shirts">T-shirts</Link>
      </div>
      <div className="category">
        <Link to="/products/men/shirts">Shirts</Link>
      </div>
      <div className="category">
        <Link to="/products/men/shorts">Shorts</Link>
      </div>
      <div className="category">
        <Link to="/products/men/boxers">Boxers</Link>
      </div>
      <div className="category">
        <Link to="/products/men/socks">Socks</Link>
      </div>
      <div className="category">
        <Link to="/products/men/backpacks">Backpacks</Link>
      </div>
      <div className="category">
        <Link to="/products/men/vests">Vests</Link>
      </div>
      <div className="category">
        <Link to="/products/men/caps">Caps</Link>
      </div>
      <div className="category">
        <Link to="/products/men/clocks">Clocks</Link>
      </div>
    </div>
  </div>
)

export default MenCategories
