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
  HomeHighlight, 
  Products, 
  About, 
  Contact,
  Gallery
} from './components.jsx';

const CONFIG = {
  

}

function Main() {
  return (
            <Body>
    <>

      <div className="wrapper">

           {/* <section id="product-tagline">
            <h2>Product Tagline</h2>
            <p>Showcase your unique boxing ring designs here.</p>
          </section> */}
          <section className="fullwidth-title-widget">
            <h1>About Custom Boxing Rings</h1>
          </section> 
          <HomeHighlight />


       </div>
      <div className="wrapper_stages"> 
        <StagesIndicator current={1} />
      </div>
    </>
            </Body>
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
    <Footer />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
