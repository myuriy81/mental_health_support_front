import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <img src="/logo-placeholder.svg" alt="Логотип" className="footer__logo" />

        <div className="footer__contact">
          <h3>КОНТАКТ ЦЕНТР:</h3>
          <a href="tel:+380684308002">+38 (068) 430 80 02</a>
        </div>

        <div className="footer__telegram">
          <h3>ЧАТ-БОТ TELEGRAM:</h3>
          <a href="https://t.me/ab3_rc_bot">@ab3_rc_bot</a>
        </div>
      </div>

      <div className="footer__socials">
        <a href="#">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="#">
          <img src="/instagram.svg" alt="Instagram" />
        </a>
        <a href="#">
          <img src="/x.svg" alt="X (Twitter)" />
        </a>
        <a href="#">
          <img src="/telegram.svg" alt="Telegram" />
        </a>
        <a href="#">
          <img src="/youtube.svg" alt="YouTube" />
        </a>
        <a href="#">
          <img src="/tiktok.svg" alt="TikTok" />
        </a>
      </div>
    </footer>
  );
};
