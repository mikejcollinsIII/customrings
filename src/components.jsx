import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilRuler, FaCheckCircle, FaIndustry, FaShippingFast, FaTimes, FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import headerImage from './assets/rs=w_1023,m.webp';
import logoImage from './assets/logo/1000032349.png';
import cornereg1 from './assets/brochure/cornereg1.png';
import cornereg2 from './assets/brochure/cornereg2.png';
import ropeCoversGymKing from './assets/brochure/ropeCoversGymKing.png';
import THAI_TANIUM from './assets/brochure/THAI-TANIUM.png';
import right2fight from './assets/brochure/right2fight.png';
import THAIFIST from './assets/brochure/THAIFIST.png';
import hideoutcanvas from './assets/gallery/all-work/IMG-20250709-WA0003.jpg'
import premiumBoxingCanvas from './assets/gallery/all-work/premiumboxingcanvas.jpg'
import synergyCanvas from './assets/brochure/synergyCanvas.png';
import nextGenCanvas from './assets/brochure/nextGenCanvas.png';
import thaiFistCanvas from './assets/brochure/thaifistcanvas.jpg';
import right2FightCanvas from './assets/brochure/right2fightcanvas.png';
import hideoutPremiumCorners from './assets/brochure/hideoutPremiumCorner.png';
import gymKingCornerPosts from './assets/brochure/gymKingCorner.png';
import right2fightcorner from './assets/brochure/right2fightcorner.png';
import nextgencorner from './assets/brochure/nextgencorner.png';
import ropespacerseg from './assets/brochure/ropespacerseg.png';
import ropespacerseg2 from './assets/brochure/ropespacerseg2.png';
import hideoutropespacer from './assets/brochure/hideoutropespacer.png';
import thaitaniumropespacer from './assets/brochure/thaitaniumropespace.png';
import thaifistropespacer from './assets/brochure/thaifistropespacer.png';
import smallCornerPads from './assets/brochure/smallcornerpads.png';
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
export function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <h2>What We Do</h2>
      <ul className="what-we-do-list">
        <li>
          At Custom Boxing Rings UK, we specialise in high-quality boxing ring dressings, frames, and complete ring packages — designed for gyms, events, and promotions across the UK.
        </li>
        <li>
          All our ring dressings are imported directly from Thailand, ensuring authentic craftsmanship and durability trusted by fighters and gym owners worldwide. Standard delivery takes 4–5 weeks, with an express service available for those who need their setup sooner.
        </li>
        <li>
          Whether you need a full ring installation or simply want to upgrade your canvas, skirts, or padding, our team delivers a professional finish built to last.
        </li>
        <li>
          <strong>Quality, reliability, and authenticity</strong> — that’s what Custom Boxing Rings UK stands for.
        </li>
      </ul>

      {/* Corner Covers */}
      <div className="corner-covers-feature">
        <h3>Corner Pads</h3>
        <div className="corner-covers-flex">
          <div className="corner-covers-img-col">
            <img src={cornereg1} alt="Corner Cover Example 1" />
          </div>
          <div className="corner-covers-img-col">
            <img src={cornereg2} alt="Corner Cover Example 2" />
          </div>
        </div>
        <div className="corner-covers-text">
          <p>
            Our premium corner covers are crafted for durability and a professional finish, providing both safety and standout branding for your ring. Choose from a range of colours and custom logo options to match your gym or event.
          </p>
        </div>
        <div className="corner-covers-feature">
          <h3>Corner Cover Premium / Hideout</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={hideoutPremiumCorners} alt="Corner Cover Premium / Hideout" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
        </div>
        <div className="corner-covers-feature">
          <h3>Gym King Corner Posts</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={gymKingCornerPosts} alt="Gym King Corner Posts" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
        </div>
        <div className="corner-covers-feature">
          <h3>Right 2 Fight Corner Posts</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={right2fightcorner} alt="Right 2 Fight Corner Posts" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
        </div>
        <div className="corner-covers-feature">
          <h3>Next Gen Corner Posts</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={nextgencorner} alt="Next Gen Corner Posts" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
        </div>
      </div>

      {/* Rope Covers - Gym King */}
      <div className="corner-covers-feature">
        <h3>Rope Covers For Gym King</h3>
        <div className="corner-covers-flex">
          <div className="corner-covers-img-col">
            <img src={ropeCoversGymKing} alt="Rope Covers Gym King" />
          </div>
        </div>
        <div className="corner-covers-text">
          <p>
            Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
          </p>
        </div>
      </div>

      {/* Rope Covers - THAI-TANIUM */}
      <div className="corner-covers-feature">
        <h3>Rope Covers For THAI-TANIUM</h3>
        <div className="corner-covers-flex">
          <div className="corner-covers-img-col">
            <img src={THAI_TANIUM} alt="Rope Covers THAI-TANIUM" />
          </div>
        </div>
        <div className="corner-covers-text">
          {/* <p>
            Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
          </p> */}
        </div>
      </div>

      {/* Rope Covers - Right2Fight */}
      <div className="corner-covers-feature">
        <h3>Rope Covers For Right2Fight</h3>
        <div className="corner-covers-flex">
          <div className="corner-covers-img-col">
            <img src={right2fight} alt="Rope Covers Right2Fight" />
          </div>
        </div>
        <div className="corner-covers-text">
          {/* <p>
            Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
          </p> */}
        </div>
      </div>
        <div className="corner-covers-feature">
          <h3>Rope Covers For THAI FIST</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={THAIFIST} alt="Rope Covers THAI FIST" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
         <div className="corner-covers-feature">
          <h3>Hideout Arena Canvas</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={hideoutcanvas} alt="Hideout Arena Canvas" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Premium Boxing Canvas</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={premiumBoxingCanvas} alt="Premium Boxing Canvas" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Synergy Boxing Canvas</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={synergyCanvas} alt="SynergyBoxing Canvas" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Next Gen Boxing Canvas</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={nextGenCanvas} alt="Next Gen Boxing Canvas" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Thai Fist Boxing Canvas</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={thaiFistCanvas} alt="Thai Fist Boxing Canvas" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Right 2 Fight Boxing Canvas</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={right2FightCanvas} alt="Right 2 Fight Boxing Canvas" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Rope Spacers</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={ropespacerseg} alt="Rope Spacer Example 1" />
            </div>
            <div className="corner-covers-img-col">
              <img src={ropespacerseg2} alt="Rope Spacer Example 2" />
            </div>
          </div>
          <div className="corner-covers-text">
          <p>
            Our premium corner covers are crafted for durability and a professional finish, providing both safety and standout branding for your ring. Choose from a range of colours and custom logo options to match your gym or event.
          </p>
        </div>
        </div>
        <div className="corner-covers-feature">
          <h3>The Hideout Arena Rope Spacers</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={hideoutropespacer} alt="Hideout Arena Rope Spacers" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Thaitanium Rope Spacers</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={thaitaniumropespacer} alt="Thaitanium Rope Spacers" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
        <div className="corner-covers-feature">
          <h3>Thai Fist Rope Spacers</h3>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={thaifistropespacer} alt="Thai Fist Rope Spacers" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
          <div className="corner-covers-feature">
          <h2>Small Corner Posts</h2>
          <div className="corner-covers-flex">
            <div className="corner-covers-img-col">
              <img src={smallCornerPads} alt="Small Corner Pads" />
            </div>
          </div>
          <div className="corner-covers-text">
            {/* <p>
              Our custom rope covers add a professional finish and extra safety to your ring. Available in a variety of colours and with full branding options, they’re designed to withstand the rigours of daily training and high-profile events.
            </p> */}
          </div>
       </div>
    </div>
  );
}
export function Prices() {
  return (
    <div className="container">
    <section className="prices-section">
      <h2>Ring Dressing Packages & Pricing</h2>
      <div className="prices-table-wrapper">
        <table className="prices-table">
          <thead>
            <tr>
              <th>Set</th>
              <th>Includes</th>
              <th>Size</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            {/* SET 1 */}
            <tr>
              <td rowSpan="5"><strong>Set 1</strong></td>
              <td rowSpan="5">Canvas, Rope Cover, Corner Pad, Spacer</td>
              <td>14ft</td>
              <td>£1,433.10</td>
              <td>£2,212.55</td>
            </tr>
            <tr>
              <td>16ft</td>
              <td>£1,518.10</td>
              <td>£2,603.55</td>
            </tr>
            <tr>
              <td>18ft</td>
              <td>£1,909.10</td>
              <td>£2,892.55</td>
            </tr>
            <tr>
              <td>20ft</td>
              <td>£2,198.10</td>
              <td>£3,402.55</td>
            </tr>
            <tr>
              <td>24ft</td>
              <td>£2,708.10</td>
              <td>£3,972.05</td>
            </tr>
            {/* SET 2 */}
            <tr>
              <td rowSpan="4"><strong>Set 2</strong></td>
              <td rowSpan="4">Canvas, Ropes, Corner, Spacer, Long Turnbuckle Cover, Skirts & Small Corner Pad</td>
              <td>16ft</td>
              <td>£2,419.10</td>
              <td>£3,462.05</td>
            </tr>
            <tr>
              <td>18ft</td>
              <td>£2,929.10</td>
              <td>£3,972.05</td>
            </tr>
            <tr>
              <td>20ft</td>
              <td>£3,269.10</td>
              <td>£4,312.05</td>
            </tr>
            <tr>
              <td>24ft</td>
              <td>£3,779.10</td>
              <td>£4,822.05</td>
            </tr>
          </tbody>
        </table>
        <p className="prices-note">
          All prices include VAT. Delivery and installation available on request. For bespoke packages or larger orders, please <a href="/contact">contact us</a> for a quote.
        </p>
      </div>
    </section>
        <section className="prices-section">
      <h2>Individual Product Pricing</h2>
      <div className="prices-table-wrapper">
        <table className="prices-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Size/Set</th>
              <th>Qty</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Canvas (Vinyl)</td>
              <td>14 ft.</td>
              <td>1 pcs.</td>
              <td>£775.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>14 ft.</td>
              <td>1 pcs.</td>
              <td>£549.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>16 ft.</td>
              <td>1 pcs.</td>
              <td>£599.00</td>
              <td>£999.00</td>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>18 ft.</td>
              <td>1 pcs.</td>
              <td>£829.00</td>
              <td>£1,299.00</td>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>20 ft.</td>
              <td>1 pcs.</td>
              <td>£999.00</td>
              <td>£1,499.00</td>
            </tr>
            <tr>
              <td>Canvas</td>
              <td>24 ft.</td>
              <td>1 pcs.</td>
              <td>£1,299.00</td>
              <td>£1,799.00</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>14 ft. ring (12 ft.)</td>
              <td>1 pcs.</td>
              <td>£549.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>16 ft. ring (13 ft.)</td>
              <td>1 set</td>
              <td>£579.00</td>
              <td>£999.00</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>16 ft. ring (14 ft.)</td>
              <td>1 set</td>
              <td>£599.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>18 ft. ring (15 ft.)</td>
              <td>1 set</td>
              <td>£829.00</td>
              <td>£1,299.00</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>18 ft. ring (16 ft.)</td>
              <td>1 set</td>
              <td>£849.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>20 ft. ring (17 ft.)</td>
              <td>1 set</td>
              <td>£999.00</td>
              <td>£1,499.00</td>
            </tr>
            <tr>
              <td>Rope Cover</td>
              <td>24 ft. ring (21 ft.)</td>
              <td>1 set</td>
              <td>£1,299.00</td>
              <td>£1,799.00</td>
            </tr>
            <tr>
              <td>Skirts</td>
              <td>-</td>
              <td>1 set</td>
              <td>£349.00</td>
              <td>£549.00</td>
            </tr>
            <tr>
              <td>Skirts</td>
              <td>20×1 ft.</td>
              <td>1 set</td>
              <td>£299.00</td>
              <td>£449.00</td>
            </tr>
            <tr>
              <td>Skirts</td>
              <td>20×3 ft.</td>
              <td>1 set</td>
              <td>£349.00</td>
              <td>£549.00</td>
            </tr>
            <tr>
              <td>Corner Pads</td>
              <td>4 pcs./set</td>
              <td>1 set</td>
              <td>£399.00</td>
              <td>£549.00</td>
            </tr>
            <tr>
              <td>Small Corner Pads</td>
              <td>16 pcs./set</td>
              <td>1 set</td>
              <td>£249.00</td>
              <td>£379.00</td>
            </tr>
            <tr>
              <td>Short Turnbuckle Cover</td>
              <td>16 pcs./set</td>
              <td>1 set</td>
              <td>£189.00</td>
              <td>£299.00</td>
            </tr>
            <tr>
              <td>Long Turnbuckle Cover</td>
              <td>4 pcs./set</td>
              <td>1 set</td>
              <td>£219.00</td>
              <td>£299.00</td>
            </tr>
            <tr>
              <td>Spacer</td>
              <td>8 pcs./set</td>
              <td>1 set</td>
              <td>£189.00</td>
              <td>£299.00</td>
            </tr>
          </tbody>
        </table>
        <p className="prices-note">
          All prices include VAT. For custom sizes, bulk orders, or installation, <a href="/contact">contact us</a>.
        </p>
      </div>
    </section>
  </div>
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

export function AboutHighlight() {
  return (
    <>
       <div className="about-highlight about-highlight-flex">
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
        <a href="https://wa.me/447931239316" className="enquire-btn" target="_blank" rel="noopener noreferrer">Enquire Now</a>
        <Link to="/products" className="gallery-btn">View Gallery</Link>
      </div>
    </>
  );
}

export function HomeHighlight() {
  return (
    <div className="about-highlight about-highlight-flex">
      <div className="about-highlight-text">
        <p style={{ fontSize: '1.5rem', fontWeight: 400, textAlign: 'center', margin: 0 }}>
          Custom Boxing Rings UK delivers premium, fully custom ring dressings and accessories for gyms and promoters. From bespoke canvases to branded corner pads and rope covers, we help you create a professional look for any event—crafted for durability, style, and impact.
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

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Our Work');
  const [visibleImages, setVisibleImages] = React.useState({});

  // Updated categories
  const categories = ['All Our Work', 'Custom Bags', 'Corner Pads', 'Ring Covers', 'Rope Spacers', 'Rope Covers'];
  
  const filteredImages = selectedCategory === 'All Our Work' 
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  // Scroll to top on mount or category change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  // Intersection Observer for lazy loading
  const imageRefs = React.useRef([]);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleImages(prev => ({ ...prev, [entry.target.dataset.index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [filteredImages]);

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
            ref={el => imageRefs.current[index] = el}
            data-index={index}
          >
            {visibleImages[index] ? (
              <img 
                src={image.thumb} 
                alt={image.title}
                loading="lazy"
              />
            ) : (
              <div style={{width:'100%',height:'250px',background:'#222',borderRadius:'12px'}}></div>
            )}
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
