// src/components/Products.js

import React from "react"
import { Link } from "react-router-dom"
import menImage from "../images/men.png"
import womenImage from "../images/women.png"

const Products = () => (
  <div className="categories">
    <div className="category">
      <Link to="/men-categories">
        <img src={menImage} alt="Men's products" />
      </Link>
    </div>
    <div className="category">
      <Link to="/women-categories">
        <img src={womenImage} alt="Women's products" />
      </Link>
    </div>
  </div>
)

export default Products
