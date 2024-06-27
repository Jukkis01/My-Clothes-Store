import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

const WomenCategories = () => (
  <div className="category-list">
    <h2>Women's Categories</h2>
    <div className="product-categories">
      <div className="category">
        <Link to="/products/women/glasses">Glasses</Link>
      </div>
      <div className="category">
        <Link to="/products/women/sweaters">Sweaters</Link>
      </div>
      <div className="category">
        <Link to="/products/women/hoodies">Hoodies</Link>
      </div>
      <div className="category">
        <Link to="/products/women/t-shirts">T-shirts</Link>
      </div>
      <div className="category">
        <Link to="/products/women/shirts">Shirts</Link>
      </div>
      <div className="category">
        <Link to="/products/women/shorts">Shorts</Link>
      </div>
      <div className="category">
        <Link to="/products/women/boxers">Boxers</Link>
      </div>
      <div className="category">
        <Link to="/products/women/socks">Socks</Link>
      </div>
      <div className="category">
        <Link to="/products/women/backpacks">Backpacks</Link>
      </div>
      <div className="category">
        <Link to="/products/women/vests">Vests</Link>
      </div>
      <div className="category">
        <Link to="/products/women/caps">Caps</Link>
      </div>
      <div className="category">
        <Link to="/products/women/clocks">Clocks</Link>
      </div>
      <div className="category">
        <Link to="/products/women/jeans">Jeans</Link>{" "}
        {/* Lisätty Jeans-kategoria */}
      </div>
    </div>
  </div>
)

export default WomenCategories
