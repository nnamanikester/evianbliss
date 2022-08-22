import Image from "next/image";
import * as React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header-logo__container">
            <Image
              className="header-logo__image"
              src={require("/public/logo.png")}
              width="120rem"
              height="28rem"
              alt="Evian Bliss Logo"
            />
          </div>

          <ul className="header-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="dropdown">
              <a href="#">Services [ ]</a>
              <ul className="dropdown__menu">
                <li>
                  <a href="#">Hair Dressing Bottox</a>
                </li>
                <li>
                  <a href="#">Braiding</a>
                </li>
                <li>
                  <a href="#">Hair Dressing Bottox</a>
                </li>
                <li>
                  <a href="#">Braiding</a>
                </li>
                <li>
                  <a href="#">Hair Dressing Bottox</a>
                </li>
                <li>
                  <a href="#">Braiding</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Promo</a>
            </li>
            <li>
              <a href="#">Prices</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="header-contact">
            <span className="">[ ] </span>
            <a href="tel:+2348022164416"> +234 (802) 216 4416</a>
          </div>

          <div className="menu-icon">
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
