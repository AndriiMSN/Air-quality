import React, { useState } from 'react';
import './HeroBlock.scss'

const HeroBlock = ({ title, links, logos }) => {
  const logosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero-partners-item"
    key={i} />);
  const navItems = links.map((link, i) => <a href={link.href}
    className="hero-navigation-item"
    key={i}>{link.title}</a>);

  const [burgerButton, setBurgerButton] = useState(false)
  const [classBurgerClose, setClassBurgerClose] = useState(false)
  return (
    <section className="hero">
      <div className={`hero-mob-menu ${(burgerButton) ? "show" : ""}`}>
        {/* <div className="close">
          <span></span>
          <span></span>
        </div> */}

        <div className="nav-link">
          {navItems}
        </div>

        <div className="bottom">
          <p>2020, Все права защищены</p>
          <p>Согласие на обработку персональных данных
Политика конфиденциальности</p>
        </div>
      </div>
      <div className="container">
        <div className="hero-partners">
          <div className="logo">
            {logosImages}
          </div>
          <div onClick={() => {
            setBurgerButton(!burgerButton);
            setClassBurgerClose(!classBurgerClose)
          }}
            className={`hero-burger ${(burgerButton) ? "close" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
        <nav className="hero-navigation">
          {navItems}
        </nav>
        <h1 className="hero-title">{title}</h1>
        <a href="#" className="hero-link">Отследить</a>
      </div>
    </section>
  );
};

export default HeroBlock;