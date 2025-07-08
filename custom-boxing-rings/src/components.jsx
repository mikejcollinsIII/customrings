import { Link } from 'react-router-dom';
import { FaPencilRuler, FaCheckCircle, FaIndustry, FaShippingFast } from 'react-icons/fa';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-row">
        <h1>Custom Boxing Rings</h1>
        <a className="header-phone" href="tel:07931239316">07931239316</a>
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
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" role="menu">
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}

export function HeaderMedia()  {
  return (
    <div className="header-media">
      <img src="/src/assets/rs=w_1023,m.webp" alt="Custom Boxing Ring" />
    </div>
  );
};
export function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Custom Boxing Rings. All rights reserved.</p>
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
