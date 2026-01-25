import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

import '../CSS/footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left: Logo */}
        <div className="footer-brand">
          <a className="brand-link" href="/">
            <img
              className="brand-logo"
              src="/siloghub_logo_4k_white.png"
              alt="Silog Hub logo"
              loading="lazy"
            />
          </a>

          <p className="brand-tagline">MADE TO SATISFY</p>
          <div className="brand-stars">✦ ✦ ✦ ✦ ✦</div>
        </div>

        {/* Middle: Links */}
        <nav className="footer-nav">
          <ul className="footer-links">
            <li><a href="/about-us">Our Story</a></li>
            <li><a href="/">Find Us</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </nav>

        {/* Right: Signup + Social */}
        <div className="footer-signup">
          <h3 className="signup-title">SILOG HUB UPDATES</h3>

          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">Email</label>
            <span className="signup-label">Email</span>

            <div className="signup-field">
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="email@example.com"
                autoComplete="email"
                required
              />
              <button className="signup-btn" type="submit">
                <span>→</span>
              </button>
            </div>
          </form>

          <div className="footer-social">
            <a className="social" href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
            </a>

            <a className="social" href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF/>
            </a>

            <a className="social" href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <FaTiktok/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer