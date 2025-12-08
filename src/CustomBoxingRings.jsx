import React from 'react';
import { Link } from 'react-router-dom';

export function CustomBoxingRings() {
  return (
    <main className="central-container custom-boxing-rings-page">
      <section className="fullwidth-title-widget">
        <h1>Custom Boxing Rings for Gyms, Clubs & Events</h1>
        <p className="main-white" style={{fontSize:'1.3rem',marginTop:'1.2rem'}}>
          Elevate your training space or event with a bespoke boxing ring, built for performance, safety, and style. Choose from a range of sizes, finishes, and branding options.
        </p>
      </section>
      <section className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h2>Tailored Rings for Your Facility</h2>
          <p>
            Every gym and club is unique. Our rings are custom-built to fit your space, training needs, and brand identity. From compact training rings to full-size competition setups, we deliver solutions that work for you.
          </p>
        </div>
      </section>
      <section className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h2>Built for Safety and Longevity</h2>
          <p>
            Safety and durability are at the heart of our designs. We use premium materials and expert craftsmanship to ensure every ring stands up to daily use and meets the highest standards for athletes and coaches.
          </p>
        </div>
      </section>
      <section className="about-highlight about-highlight-flex">
        <div className="about-highlight-text">
          <h2>Branding & Customisation</h2>
          <p>
            Make your ring a centrepiece. Add your logo, colours, and custom graphics to create a professional look that reflects your club or event. We offer a full range of branding options for canvas, skirts, and corner pads.
          </p>
        </div>
      </section>
      <section className="about-highlight">
        <h2>What You Can Expect</h2>
        <ul style={{fontSize:'1.15rem',lineHeight:'1.7',color:'#fff',maxWidth:'700px',margin:'1.5rem auto'}}>
          <li>Custom sizes and finishes to suit your space</li>
          <li>Premium build quality for long-term use</li>
          <li>Branding options for canvas, skirts, and pads</li>
          <li>Expert support from design to installation</li>
          <li>Fast, reliable delivery across the UK</li>
        </ul>
        <div className="enquire-button-container">
          <Link to="/contact" className="enquire-btn">Enquire About Boxing Rings</Link>
        </div>
      </section>
    </main>
  );
}