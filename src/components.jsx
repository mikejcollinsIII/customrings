import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilRuler, FaCheckCircle, FaIndustry, FaShippingFast, FaTimes, FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import AboutHighlight from './AboutHighlight.jsx';
import Gallery from './Gallery.jsx';
import WhatWeDo from './WhatWeDo.jsx';
import Prices from './Prices.jsx';
import headerImage from './assets/rs=w_1023,m.webp';
import logoImage from './assets/logo/1000032349.png';



export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
  if (menuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
}, [menuOpen]);
  return (
    <header className="header">
      <div className="header-row">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="header-logo-link">
          <img src={logoImage} alt="Custom Boxing Rings" className="header-logo" />
        </Link>
        <div className="header-right">
          <div className="header-social">
            <a href="https://facebook.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <FaInstagram size={20} />
            </a>
          </div>
          <a className="header-phone" href="tel:07931239316">07931239316</a>
        </div>
      </div>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span></span><span></span><span></span>
      </button>
      <nav className="desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/what-we-do">What We Do</Link>
        <Link to="/contact">Contact</Link>
        <Link to="https://themuaythaishop.co.uk">The Muay Thai Shop</Link>
      </nav>
      <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} role="menu">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/what-we-do" onClick={() => setMenuOpen(false)}>What We Do</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="https://themuaythaishop.co.uk" onClick={() => setMenuOpen(false)}>The Muay Thai Shop</Link>
      </nav>
    </header>
  );
}


// Add this wrapper to render both sections as siblings
export function WhatWeDoWithPrices() {
  return (
    <>
      <WhatWeDo />
      <Prices />
    </>
  );
}
export function HeaderMedia()  {
  return (
    <div className="header-media">
      <img src={headerImage} alt="Custom Boxing Ring" />
    </div>
  );
};
export function Footer() {
  return (
    <footer className="footer">
      <section className="main-contact-section">
        <div className="main-contact-links">
          <div className="main-contact-link-col">
            <a href="tel:07931239316" style={{ textDecoration: 'none' }}>Phone: 07931239316</a>
          </div>
          <div className="main-contact-link-col">
            <a href="mailto:info@customboxingrings.co.uk" style={{ textDecoration: 'none' }}>Email: info@customboxingrings.co.uk</a>
          </div>
          <div className="main-contact-link-col">
            <a href="tel:07931239316" style={{ textDecoration: 'none' }}>Enquire</a>
          </div>
          <div className="main-contact-link-col main-contact-social">
            <a href="https://facebook.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <a href="tel:07931239316" className="contact-btn" type="button">Contact</a>
      </section>
      <p>&copy; 2025 Custom Boxing Rings. All rights reserved. Website by <a href="https://yourwebsite.com">MJCIII</a></p>
    </footer>
  );
}

export function Body({ children }) {
  return <main className="main-content">{children}</main>;
}

export function Stage({ number, label, active, icon }) {
  return (
    <div className={`stage${active ? " active" : ""}`}>
      <span className="stage-number"><span className="stage-num">{number}</span></span>
      <span className="stage-icon">{icon}</span>
      <span className="stage-label">{label}</span>
    </div>
  );
}

export function StagesIndicator({ current = 1 }) {
  return (
    <div className="stages-indicator">
      <Stage number={1} label="Design Mockup" active={current === 1} icon={<FaPencilRuler size={32} />} />
      <Stage number={2} label="Confirm & Pay 60%" active={current === 2} icon={<FaCheckCircle size={32} />} />
      <Stage number={3} label="Production in Thailand" active={current === 3} icon={<FaIndustry size={32} />} />
      <Stage number={4} label="Balance Paid & Shipping" active={current === 4} icon={<FaShippingFast size={32} />} />
    </div>
  );
}

export function CentralContainer({ children }) {
  return <div className="central-container">{children}</div>;
}



export function HomeHighlight() {
  return (
    <div className="about-highlight about-highlight-flex">
      <div className="about-highlight-text">
        <p style={{ fontSize: '1.5rem', fontWeight: 400, textAlign: 'center', margin: 0 }}>
          Custom Boxing Rings UK delivers premium, fully custom ring dressings and accessories for gyms and promoters. From bespoke canvases to branded corner pads and rope covers, we help you create a professional look for any event—crafted for durability, style, and impact.
        </p>
        <p style={{ fontSize: '1.15rem', textAlign: 'center', marginTop: '1.5rem' }}>
          For full ring orders, MMA cages, or any combat sport related installation or dressing, check out our <Link to="/custom-boxing-rings">Full Rings</Link>, <Link to="/mma-cages">MMA Cages</Link>, <Link to="/products">Products</Link>, <Link to="/what-we-do">What We Do</Link>, <Link to="/about">About Us</Link>, or <Link to="/contact">Contact Us</Link> to find out more.
        </p>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <Body>
      <div className="wrapper">
        <section className="fullwidth-title-widget">
          <h1>Our Products & Gallery</h1>
        </section>
      </div>
      <Gallery />
    </Body>
  );
}

export function About() {
  return (
    <CentralContainer>
      <Body>
        <section id="about">
          <h2>About Us</h2>
          <AboutHighlight />
        </section>
      </Body>
    </CentralContainer>
  );
}

export function Contact() {
  return (
    <CentralContainer>
      <Body>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email us at info@customboxingrings.co.uk</p>
        </section>
      </Body>
    </CentralContainer>
  );
}


// Dynamic image loading function
function importAllImages() {
  const images = [];
  
  // Import all images from all-work folder
  const allWorkContext = import.meta.glob('./assets/gallery/all-work/*.{png,jpg,jpeg,webp}', { eager: true });
  Object.entries(allWorkContext).forEach(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    images.push({
      id: `all-work-${index + 1}`,
      src: module.default,
      thumb: module.default,
      title: `Custom Boxing Work #${index + 1}`,
      description: `Professional custom boxing equipment and ring accessories`,
      category: "All Our Work",
      fileName: fileName
    });
  });

  // Import images from custom-bags folder
  const customBagsContext = import.meta.glob('./assets/gallery/custom-bags/*.{png,jpg,jpeg,webp}', { eager: true });
  Object.entries(customBagsContext).forEach(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    images.push({
      id: `custom-bags-${index + 1}`,
      src: module.default,
      thumb: module.default,
      title: `Custom Training Bag #${index + 1}`,
      description: `Professional custom training bags with reinforced stitching`,
      category: "Custom Bags",
      fileName: fileName
    });
  });

  // Import images from corner-pads folder (renamed from corner-posts)
  const cornerPadsContext = import.meta.glob('./assets/gallery/corner-pads/*.{png,jpg,jpeg,webp}', { eager: true });
  Object.entries(cornerPadsContext).forEach(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    images.push({
      id: `corner-pads-${index + 1}`,
      src: module.default,
      thumb: module.default,
      title: `Corner Pad Covers #${index + 1}`,
      description: `Professional corner pad covers with safety padding`,
      category: "Corner Pads",
      fileName: fileName
    });
  });

  // Import images from ring-covers folder
  const ringCoversContext = import.meta.glob('./assets/gallery/ring-covers/*.{png,jpg,jpeg,webp}', { eager: true });
  Object.entries(ringCoversContext).forEach(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    images.push({
      id: `ring-covers-${index + 1}`,
      src: module.default,
      thumb: module.default,
      title: `Ring Canvas #${index + 1}`,
      description: `High-quality ring canvas with custom graphics and branding`,
      category: "Ring Covers",
      fileName: fileName
    });
  });

  // Import images from rope-spacers folder (new category)
  const ropeSpacersContext = import.meta.glob('./assets/gallery/rope-spacers/*.{png,jpg,jpeg,webp}', { eager: true });
  Object.entries(ropeSpacersContext).forEach(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    images.push({
      id: `rope-spacers-${index + 1}`,
      src: module.default,
      thumb: module.default,
      title: `Rope Spacer #${index + 1}`,
      description: `Custom rope spacers for boxing rings`,
      category: "Rope Spacers",
      fileName: fileName
    });
  });
  // Import images from rope-covers folder (new category)
  const ropeCoversContext = import.meta.glob('./assets/gallery/rope-covers/*.{png,jpg,jpeg,webp}', { eager: true });
  Object.entries(ropeCoversContext).forEach(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    images.push({
      id: `rope-covers-${index + 1}`,
      src: module.default,
      thumb: module.default,
      title: `Rope Cover #${index + 1}`,
      description: `Custom rope covers for boxing rings`,
      category: "Rope Covers",
      fileName: fileName
    });
  });
  return images;
}

// Get all gallery images dynamically
const galleryImages = importAllImages();


