// src/App.js

import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./App.css"
import Products from "./components/Products"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Footer from "./components/Footer"
import MenCategories from "./components/MenCategories"
import WomenCategories from "./components/WomenCategories"
import MenJeans from "./components/MenJeans"
import WomenGlasses from "./components/WomenGlasses"
import MenHoodies from "./components/MenHoodies"

const App = () => (
  <Router>
    <div className="app">
      <header>
        <h1>My Clothes Store</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/men-categories" element={<MenCategories />} />
        <Route path="/women-categories" element={<WomenCategories />} />
        <Route path="/products/men/jeans" element={<MenJeans />} />
        <Route path="/products/women/glasses" element={<WomenGlasses />} />
        <Route path="/products/men/hoodies" element={<MenHoodies />} />
      </Routes>
      <Footer />
    </div>
  </Router>
)

export default App
