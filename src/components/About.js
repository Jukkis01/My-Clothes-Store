import React from "react"
import "./About.css"
import facebookLogo from "../assets/facebook-logo.png"
import instagramLogo from "../assets/instagram-logo.png"

const About = () => (
  <div className="about-container">
    <h2>About Us</h2>
    <p>
      Welcome to our web store, a premier destination for high-quality clothing.
      At our store, we believe in combining fashion, quality, and affordability
      to provide you with the best shopping experience.
    </p>
    <p>Our Story</p>
    <p>
      Our journey began with a simple idea: to create a clothing store that
      offers stylish and comfortable clothing for everyone. We started as a
      small business and have grown into a beloved brand known for our
      commitment to quality and customer satisfaction.
    </p>
    <p>What We Offer</p>
    <p>
      We offer a wide range of clothing items, including casual wear, formal
      wear, and accessories. Each product is carefully selected to ensure it
      meets our high standards of quality and style.
    </p>
    <p>Connect with Us</p>
    <p>
      Stay connected with us on social media for the latest updates and
      exclusive offers:
    </p>
    <div className="social-media-links">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookLogo} alt="Facebook" className="social-media-icon" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={instagramLogo}
          alt="Instagram"
          className="social-media-icon"
        />
      </a>
    </div>
  </div>
)

export default About
