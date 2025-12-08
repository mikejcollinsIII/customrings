import React from 'react';
import { Link } from 'react-router-dom';

export function MmaCages() {
  return (
    <main className="central-container mma-cages-page">
      <section className="fullwidth-title-widget">
        <h1>Professional MMA Cages for Gyms and Facilities</h1>
        <p className="main-white" style={{fontSize:'1.3rem',marginTop:'1.2rem'}}>
          Reflect the quality and ethos of your gym and brand with our premium MMA cages. Built for quality, consistency, and long-term durability.
        </p>
      </section>
      <section className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h2>Custom Cages for Your Facility</h2>
          <p>
            A good training environment is built on equipment you can rely on every day. Our MMA cages are developed to support the demands of busy gyms, coaching teams, and fighters who expect premium aesthetic and build quality.
          </p>
        </div>
      </section>
      <section className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h2>Made to Integrate Naturally Into Your Space</h2>
          <p>
            Every gym has its own character. Whether you're upgrading an established facility or setting up a new training area, our cages are available in a range of sizes and configurations so you can choose what fits best. Tailor the environment to your brand, building a seamlessly stylish and practical facility.
          </p>
        </div>
      </section>
      <section className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h2>Event-Ready for Promotions and Showcases</h2>
          <p>
            Our custom MMA cages and equipment cater for promotional event installation as well, with all the considerations you’d expect for a spectacular viewing.
          </p>
        </div>
      </section>
      <section className="about-highlight">
        <h2>What You Can Expect</h2>
        <ul style={{fontSize:'1.15rem',lineHeight:'1.7',color:'#fff',maxWidth:'700px',margin:'1.5rem auto'}}>
          <li>A premium cage built with longevity in mind</li>
          <li>Configurations suitable for both gyms and promotions</li>
          <li>Branding options to match your facility’s identity</li>
          <li>Consistent quality designed for everyday training</li>
          <li>Support from a team experienced in modern combat-sports setups</li>
        </ul>
        <div className="enquire-button-container">
          <Link to="/contact" className="enquire-btn">Enquire About MMA Cages</Link>
        </div>
      </section>
    </main>
  );
}