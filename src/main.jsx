import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
import { Header, Footer, Body, StagesIndicator, HeaderMedia } from './components.jsx';

function Main() {
  return (
    <>
      <div className="wrapper">
        <Body>
          <section id="product-tagline">
            <h2>Product Tagline</h2>
            <p>Showcase your unique boxing ring designs here.</p>
          </section>
          <section className="fullwidth-title-widget">
            <h1>About Custom Boxing Rings</h1>
          </section>
          <AboutHighlight />

        </Body>
      </div>
      <div className="wrapper_stages">
        <StagesIndicator current={1} />
      </div>
    </>
  );
}

function AboutHighlight() {
  return (
    <div className="about-highlight about-highlight-flex">
      <img
        className="about-highlight-img"
        src="https://img1.wsimg.com/isteam/ip/a5faf59b-3fe5-451a-a6de-c183dd95b093/8169aa88-851a-432f-a42a-be41c220dd81.jpeg/:/cr=t:2.57%25,l:13.05%25,w:70.01%25,h:36.92%25/rs=w:600,h:300,cg:true,m"
        alt="Hitman fight league custom boxing ring"
      />
      <div className="about-highlight-text">
        <h3>Our Mission</h3>
        <p>
          At Custom Boxing Rings, we are dedicated to providing the highest quality boxing ring canvases and dressings. Our mission is to enhance your sporting events with bespoke solutions tailored to your needs.
        </p>
      </div>
    </div>
  );
}

function CentralContainer({ children }) {
  return <div className="central-container">{children}</div>;
}

function Products() {
  return (
    <CentralContainer>
      <Body>
        {/* Add your Products content here */}
      </Body>
    </CentralContainer>
  );
}

function About() {
  return (
    <CentralContainer>
      <Body>
        <section id="about">
          <h2>About Us</h2>
          <p>We create high-quality, custom boxing rings for all needs.</p>
        </section>
      </Body>
    </CentralContainer>
  );
}

function Contact() {
  return (
    <CentralContainer>
      <Body>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email us at info@customboxingrings.com</p>
        </section>
      </Body>
    </CentralContainer>
  );
}

const MainContactSection = () => (
  <div className="wrapper-contact">
    <section id="contact" className="main-contact-section">
      <div className="main-contact-links">
        <div className="main-contact-link-col">
          <a href="tel:07931239316" style={{ textDecoration: 'none' }}>Phone: 07931239316</a>
        </div>
        <div className="main-contact-link-col">
          <a href="mailto:info@customboxingrings.com" style={{ textDecoration: 'none' }}>Email: info@customboxingrings.com</a>
        </div>
        <div className="main-contact-link-col">
          <a href="tel:07931239316" style={{ textDecoration: 'none' }}>Contact</a>
        </div>
        <div className="main-contact-link-col main-contact-social">
          <a href="https://facebook.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://instagram.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
        </div>
      </div>
      <h2 className="main-white">Contact Us</h2>
      <a href="tel:07931239316" className="contact-btn" type="button">Contact</a>
    </section>
  </div>
);

const App = () => (
  <BrowserRouter basename={import.meta.env.PROD ? '/customrings' : ''}>
    <HeaderMedia />
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <MainContactSection />
    <Footer />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
