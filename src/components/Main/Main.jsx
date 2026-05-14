import React from "react";
import "./Main.css";

const Main = () => {
  return (
<section id="main-section">

  {/* ================= Projects ================= */}

  <div className="projects">

    <h2>Projects</h2>

    <div className="projects-container">

      {/* Card 1 */}
      <div className="card">
        <img src="/Portfolio-Website.png" alt="project" />

        <h3>Portfolio Website</h3>

        <p>
          Modern responsive portfolio built with React.
        </p>
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src="/E-commerce.png" alt="project" />

        <h3>E-commerce Store</h3>

        <p>
          Online store with modern UI and fast performance.
        </p>
      </div>

      {/* Card 3 */}
      <div className="card">
        <img src="/Dashboard.png" alt="project" />

        <h3>Dashboard App</h3>

        <p>
          Interactive dashboard with charts and analytics.
        </p>
      </div>

    </div>
  </div>
    

  {/* ================= Services ================= */}

  <div className="services">

    <h2>Services</h2>

    <div className="services-container">

      <div className="card">
        <img src="/WDesign.png" alt="project" />
        <h3>Website Design</h3>
        <p>
          Creating modern and beautiful website designs.
        </p>
      </div>

      <div className="card">
        <img src="/FrontendD.png" alt="project" />
        <h3>Frontend Development</h3>
        <p>
          Building responsive websites using React and JavaScript.
        </p>
      </div>

      <div className="card">
        <img src="/Responsive.png" alt="project" />
        <h3>Responsive Design</h3>
        <p>
          Making websites work perfectly on all devices.
        </p>
      </div>

      <div className="card">
        <img src="/Performance.png" alt="project" />
        <h3>Performance Improvement</h3>
        <p>
          Optimizing websites for speed and smooth experience.
        </p>
      </div>

    </div>
  </div>

</section>
  );
};

export default Main;