import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/header.css";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const threshold = 140; // increase if you want it to switch later

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setIsSticky(y >= threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isSticky ? "is-sticky" : ""}`}>
      {/* Topmost header (your original layout, unchanged) */}
      {!isSticky && (
        <div className="header-top">
          <h1 className="brand-name">
            <img src="/siloghub_logo_4k_white.png" alt="Silog Hub logo" />
          </h1>

          <nav className="main-nav">
            <ul>
              <li className="homepage"><NavLink to="/">Home Page</NavLink></li>
              <li className="silogs"><NavLink to="/silogs">Silogs</NavLink></li>
              <li className="combomeals"><NavLink to="/combo-meals">Combo Meals</NavLink></li>
              <li className="familypacks"><NavLink to="/family-packs">Family Packs</NavLink></li>
              <li className="aboutus"><NavLink to="/about-us">About Us</NavLink></li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sticky header (scroll down only) */}
      {isSticky && (
        <div className="header-sticky">
          <NavLink to="/" className="sticky-logo" aria-label="Silog Hub home">
            <img src="/siloghub_logo_4k_white.png" alt="Silog Hub logo" />
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
