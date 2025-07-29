import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilRuler, FaCheckCircle, FaIndustry, FaShippingFast, FaTimes, FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram } from 'react-icons/fa';
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
            At Custom Boxing Rings UK, we create high-end, fully customised ring dressings at a price that works for real fight gyms and professional promoters alike. Whether you’re running a grassroots Muay Thai academy or hosting a major combat sports event, we’re here to make your ring stand out.
          </p>
          <p>
            We specialise in complete custom setups—canvas design, corner pads, skirts, rope covers, and more. Every piece is crafted with durability, clean aesthetics, and maximum brand impact in mind. From everyday training rings to high-level event setups, our products are built to perform and made to impress.
          </p>
          <h4>Featured At:</h4>
          <div className="featured-list">
            <div>Hitman Fight League</div>
            <div>Top King Europe Series</div>
            <div>Ultimate Fight Night</div>
            <div>The Hideout Arena</div>
            <div>The PBL Boxing</div>
            <div>Right 2’Fight Boxing Show</div>
            <div>Infightstyle Junior League</div>
            <div>…and many more gyms and promotions across the UK and Europe.</div>
          </div>
          <p>
            We’re passionate about supporting the growth of combat sports by helping gyms and promoters bring a professional, polished look to every ring—without breaking the budget.
          </p>
          <blockquote style={{fontWeight:600, marginTop:'1.2em', fontStyle:'italic'}}>
            Custom Boxing Rings UK – Built for fighters. Designed for promoters. Priced for everyone.
          </blockquote>
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
  // About page is hidden for now
  return null;
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
