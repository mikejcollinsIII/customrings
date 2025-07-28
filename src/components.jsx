import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilRuler, FaCheckCircle, FaIndustry, FaShippingFast, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import headerImage from './assets/rs=w_1023,m.webp';
import logoImage from './assets/logo/1000032349.png';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-row">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="header-logo-link">
          <img src={logoImage} alt="Custom Boxing Rings" className="header-logo" />
        </Link>
        <div className="header-right">
          <div className="header-social">
            <a href="https://facebook.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://instagram.com/customboxingrings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
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
        <Link to="/contact">Contact</Link>
      </nav>
      <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} role="menu">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </header>
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
            <a href="mailto:info@customboxingrings.com" style={{ textDecoration: 'none' }}>Email: info@customboxingrings.com</a>
          </div>
          <div className="main-contact-link-col">
            <a href="tel:07931239316" style={{ textDecoration: 'none' }}>Enquire</a>
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

export function AboutHighlight() {
  return (
    <>
       <div className="about-highlight about-highlight-flex">
        {/* <img
          className="about-highlight-img"
          src="https://img1.wsimg.com/isteam/ip/a5faf59b-3fe5-451a-a6de-c183dd95b093/8169aa88-851a-432f-a42a-be41c220dd81.jpeg/:/cr=t:2.57%25,l:13.05%25,w:70.01%25,h:36.92%25/rs=w:600,h:300,cg:true,m"
          alt="Hitman fight league custom boxing ring"
        /> */}
        <div className="about-highlight-text">
          <h3>Our Mission</h3>
          <p>
            At Custom Boxing Rings, we are dedicated to providing the highest quality boxing ring canvases and dressings. Our mission is to enhance your sporting events with bespoke solutions tailored to your needs.
          </p>
        </div>
      </div>
      <div className="enquire-button-container">
        <a href="#contact" className="enquire-btn">Enquire Now</a>
        <Link to="/products" className="gallery-btn">View Gallery</Link>
      </div>
    </>
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
          <p>We create high-quality, custom boxing rings for all needs.</p>
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
          <p>Email us at info@customboxingrings.com</p>
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

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Our Work');

  // Updated categories
  const categories = ['All Our Work', 'Custom Bags', 'Corner Pads', 'Ring Covers', 'Rope Spacers', 'Rope Covers'];
  
  const filteredImages = selectedCategory === 'All Our Work' 
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen]);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>Our Product Gallery</h2>
        <p>Browse our custom boxing equipment and ring accessories</p>
      </div>

      {/* Category Filter */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.thumb} 
              alt={image.title}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
              <span className="category-tag">{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="lightbox-next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            
            <div className="lightbox-content">
              <img 
                src={filteredImages[currentImage]?.src} 
                alt={filteredImages[currentImage]?.title}
              />
              <div className="lightbox-info">
                <h3>{filteredImages[currentImage]?.title}</h3>
                <p>{filteredImages[currentImage]?.description}</p>
                <span className="lightbox-counter">
                  {currentImage + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
