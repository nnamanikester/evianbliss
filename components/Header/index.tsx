import Image from "next/image";
import * as React from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showSerices, setShowServices] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const { pathname } = useRouter();

  const handleServicesDropdown = () => {
    setShowServices(!showSerices);
  };

  React.useEffect(() => {
    if (menuRef) {
      // @ts-ignore
      const menuElement = menuRef.current!.cloneNode(true);
      // @ts-ignore
      const contactElement = contactRef.current!.cloneNode(true);

      // @ts-ignore
      menuElement.appendChild(contactElement);
      // @ts-ignore
      mobileMenuRef.current!.appendChild(menuElement);
    }
  }, []);

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

          <div
            className={cx({
              "mobile-menu": true,
              "show-mobile": showMobileMenu,
            })}
            ref={mobileMenuRef}
          >
            <div className="text-right pr-2">
              <div className="menu-icon">
                <span
                  className="lni lni-close icon-small"
                  onClick={() => setShowMobileMenu(false)}
                />
              </div>
            </div>

            <div className="header-logo__container">
              <Image
                className="header-logo__image"
                src={require("/public/logo.png")}
                width="120rem"
                height="45rem"
                alt="Evian Bliss Logo"
              />
            </div>
          </div>

          <ul className="header-menu" ref={menuRef}>
            <li>
              <Link href="/">
                <a
                  className={cx({
                    "active-menu": pathname == "/",
                  })}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={cx({
                    "active-menu": pathname == "/about",
                  })}
                >
                  About
                </a>
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className={cx({
                  "active-menu": showSerices || pathname.includes("/services"),
                })}
                onClick={handleServicesDropdown}
              >
                Services{" "}
                <i
                  className={cx({
                    lni: true,
                    "lni-chevron-down": !showSerices,
                    "lni-chevron-up": showSerices,
                  })}
                />
              </a>
              <div
                className={cx({
                  dropdown__menu: true,
                  "show-dropdown": showSerices,
                })}
              >
                <div className={"dropdown-container"}>
                  <div className="category-list">
                    <h5>Braids</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Bridal Hair Service</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Cornrow</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Twists & Bantu</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Braids</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Bridal Hair Service</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Cornrow</h5>
                    <ul>
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
                  </div>
                  <div className="category-list">
                    <h5>Twists & Bantu</h5>
                    <ul>
                      <li>
                        <a href="#">Hair Dressing Bottox</a>
                      </li>
                      <li>
                        <a href="#">Braiding</a>
                      </li>
                      <li>
                        <a href="#">
                          Hair Dressing Bottox Hair Dressing Bottox
                        </a>
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
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/prices">
                <a
                  className={cx({
                    "active-menu": pathname == "/prices",
                  })}
                >
                  Prices
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a
                  className={cx({
                    "active-menu": pathname == "/contact-us",
                  })}
                >
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>

          <div className="header-contact" ref={contactRef}>
            <a href="tel:+2348022164416">
              <span className="lni lni-phone" /> +234 (802) 216 4416
            </a>
          </div>

          <div className="menu-icon">
            <span
              className="lni lni-menu icon-small"
              onClick={() => setShowMobileMenu(true)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
