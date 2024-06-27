import React from "react"
import { Link } from "react-router-dom"
import kuva1 from "../images/kuva1.jpeg"
import "../App.css"

const Home = () => (
  <div>
    <h1>Welcome to My Clothes Store</h1>
    <img src={kuva1} alt="Kuva 1" className="home-image" />
    <div className="home-buttons">
      <Link to="/products/men/clocks" className="home-button">
        Hot Deals - Men's
      </Link>
      <Link to="/products/women/jeans" className="home-button">
        Hot Deals - Women's
      </Link>
    </div>
  </div>
)

export default Home
