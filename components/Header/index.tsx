import Image from "next/image";
import * as React from "react";
import LineIcon from "react-lineicons";

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
              height="45rem"
              alt="Evian Bliss Logo"
            />
          </div>

          <ul className="header-menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="dropdown">
              <a href="#">
                Services <i className="lni lni-chevron-down" />
              </a>
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
              <a href="#">Prices</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="header-contact">
            <a href="tel:+2348022164416">
              <span className="lni lni-phone" /> +234 (802) 216 4416
            </a>
          </div>

          <div className="menu-icon">
            <span className="lni lni-menu icon-small" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
