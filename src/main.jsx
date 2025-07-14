import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss';
import { 
  Header, 
  Footer, 
  Body, 
  StagesIndicator, 
  HeaderMedia, 
  AboutHighlight, 
  Products, 
  About, 
  Contact, 
  MainContactSection,
  Gallery
} from './components.jsx';

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
