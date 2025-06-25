import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <h1>Custom Boxing Rings</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export function headerMedia ()  {
  return (
    <div className="header-media">
      <img src="/assets/" alt="Custom Boxing Ring" />
      <p>High-quality, custom boxing rings for all needs.</p>
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
