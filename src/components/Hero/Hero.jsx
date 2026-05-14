import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
  
<div id="About">
  <section className="hero">

  {/* LEFT */}
    <div className="hero-text">
      <h1>Hi, I'm Ibrahim 👋</h1>
      <p>
        Frontend Developer passionate about building modern web experiences.
      </p>
      <button>Contact Me</button>
    </div>

  {/* RIGHT */}
    <div className="glass-card">
      <img
        src="/myphoto.png"
        alt="profile"
      />
    </div>
  </section>
</div>

   
  );
};

export default Hero;