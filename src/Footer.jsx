import './CSS/footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Left: Logo */}
        <div className="footer-brand">
          <a className="brand-link" href="/" aria-label="Home">
            <img
              className="brand-logo"
              src="/siloghub_logo_4k - white.png"
              alt="Your Brand"
              loading="lazy"
            />
          </a>

          <p className="brand-tagline">MADE TO SATISFY</p>
          <div className="brand-stars" aria-hidden="true">✦ ✦ ✦ ✦ ✦</div>
        </div>

        {/* Middle: Links */}
        <nav className="footer-nav" aria-label="Footer">
          <ul className="footer-links">
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/catering">Catering</a></li>
            <li><a href="/terms">Terms</a></li>
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
              <button className="signup-btn" type="submit" aria-label="Subscribe">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>

          <div className="footer-social" aria-label="Social links">
            <a className="social" href="https://instagram.com" aria-label="Instagram" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.7 6.7a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
              </svg>
            </a>

            <a className="social" href="https://facebook.com" aria-label="Facebook" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5a21 21 0 0 0-2.5-.1c-2.4 0-4.1 1.5-4.1 4.2V11H8v3h2.2v8h3.3Z" />
              </svg>
            </a>

            <a className="social" href="https://tiktok.com" aria-label="TikTok" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3c.4 2.6 2.1 4.4 4.6 4.7v2.7c-1.8 0-3.4-.6-4.6-1.6v6.2c0 3-2.4 5.4-5.4 5.4S3.2 18 3.2 15s2.4-5.4 5.4-5.4c.5 0 1 .1 1.5.2v2.9c-.4-.2-.9-.3-1.5-.3-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6V3h3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer