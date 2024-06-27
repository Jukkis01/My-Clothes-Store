import React from "react"
import facebookLogo from "../assets/facebook-logo.png"
import instagramLogo from "../assets/instagram-logo.png"

const Contact = () => (
  <div>
    <h2>Jukka Jääskeläinen</h2>
    <p>Phone: +358405025370</p>
    <p>e-mail: jukka.jaaskelainen@prunella.fi</p>
    <div style={{ marginBottom: "10px" }}>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={facebookLogo}
          alt="Facebook"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={instagramLogo}
          alt="Instagram"
          style={{ width: "40px", height: "40px" }}
        />
      </a>
    </div>
    <iframe
      title="Map"
      width="300"
      height="225"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.2306623403337!2d24.758704015795553!3d60.21453568184292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df69a2fc65c7d%3A0x5a7b4f5d13e7b1cb!2sFriisinkuja%203%2C%2002240%20Espoo%2C%20Finland!5e0!3m2!1sen!2sfi!4v1626217606375!5m2!1sen!2sfi"
    ></iframe>
  </div>
)

export default Contact
