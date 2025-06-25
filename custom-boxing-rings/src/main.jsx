import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import { Header, Footer, Body } from './components.jsx';

function Main() {
  return (
    <Body>
      <section id="products">
        <h2>Our Custom Boxing Rings</h2>
        <p>Showcase your unique boxing ring designs here.</p>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>We create high-quality, custom boxing rings for all needs.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email us at info@customboxingrings.com</p>
      </section>
    </Body>
  );
}


function Products() {
  return (
    <Body>
      <section id="products">
        <h2>Our Custom Boxing Rings</h2>
        <p>Showcase your unique boxing ring designs here.</p>
      </section>
    </Body>
  );
}

function About() {
  return (
    <Body>
      <section id="about">
        <h2>About Us</h2>
        <p>We create high-quality, custom boxing rings for all needs.</p>
      </section>
    </Body>
  );
}

function Contact() {
  return (
    <Body>
      <section id="contact">
        <h2>Contact</h2>
        <p>Email us at info@customboxingrings.com</p>
      </section>
    </Body>
  );
}

const App = () => (
  <BrowserRouter>
  <headerMedia />
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
