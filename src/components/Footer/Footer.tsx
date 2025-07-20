import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="logo">
          <a href="#">
            <img src={`${import.meta.env.BASE_URL}img/logo/logo.png`} alt="logo" />
          </a>
        </div>

        <div className="footer__info-block">
          <div className="footer__contacts">
            <div className="footer__contact">
              <h3>ГАРЯЧА ЛІНІЯ:</h3>
              <a href="tel:+380400000000">+38 (040) 00 000 00</a>
            </div>

            <div className="footer__telegram">
              <h3>ЧАТ-БОТ TELEGRAM:</h3>
              <a href="https://t.me/jjjj">@bla_bla_bla</a>
            </div>
          </div>

          <div className="footer__socials">
            <a href="#">
              <img src={`${import.meta.env.BASE_URL}img/icons/Frame-53.svg`} alt="Facebook" />
            </a>
            <a href="#">
              <img src={`${import.meta.env.BASE_URL}img/icons/Frame-56.svg`} alt="Instagram" />
            </a>
            <a href="#">
              <img src={`${import.meta.env.BASE_URL}img/icons/Frame-57.png`} alt="X (Twitter)" />
            </a>
            <a href="#">
              <img src={`${import.meta.env.BASE_URL}img/icons/Frame-54.svg`} alt="Telegram" />
            </a>
            <a href="#">
              <img src={`${import.meta.env.BASE_URL}img/icons/Frame-55.svg`} alt="YouTube" />
            </a>
            <a href="#">
              <img src={`${import.meta.env.BASE_URL}img/icons/Frame-58.png`} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="footer__submit-button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="custom-button1">
          <svg viewBox="0 0 300 70" className="button-frame" preserveAspectRatio="none">
            <path d="M15 0 H300 V46 L284 70 H0 V23 Z" fill="none" stroke="white" strokeWidth="4" />
          </svg>
          <span className="button-text">на головну</span>
        </div>
      </Link>
    </footer>
  );
};
