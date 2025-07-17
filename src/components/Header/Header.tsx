import { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeout: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      clearTimeout(timeout);

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      timeout = window.setTimeout(() => {
        setLastScrollY(currentScrollY);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? 'header--visible' : 'header--hidden'}`}>
      <div className="logo">
        <a href="#">
          <img src="/img/logo/logo.png" alt="logo" />
        </a>
      </div>
      <Link
        to="/"
        className="header__submit-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="custom-button-header">
          <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
            <path d="M15 0 H300 V46 L284 70 H0 V23 Z" fill="none" stroke="white" strokeWidth="2" />
          </svg>
          <span className="button-text">на головну</span>
        </div>
      </Link>
    </header>
  );
};
