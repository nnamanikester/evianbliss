import Image from "next/image";
import * as React from "react";
import cx from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: 800,
    height: 0,
  });
  const [showSerices, setShowServices] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  const mobileMenuRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const desktopMenuRef = React.useRef(null);
  const menuContainer = React.useRef(null);

  const { pathname } = useRouter();

  React.useEffect(() => {
    if (document) {
      const servicesEl = document.getElementById("sevices-dropdown");

      if (servicesEl) {
        servicesEl.onclick = () => {
          setShowServices((prev) => !prev);
        };
      }
    }
  }, []);

  React.useEffect(() => {
    if (windowSize.width < 840) {
      mobileMenuRef
        // @ts-ignore
        .current!.appendChild(menuRef.current)
        .append(contactRef.current);
    } else {
      // @ts-ignore
      desktopMenuRef.current!.appendChild(menuRef.current);
      // @ts-ignore
      menuContainer.current!.appendChild(contactRef.current);
    }
  }, [windowSize]);

  React.useEffect(() => {
    function getWindowSize() {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }

    setWindowSize(getWindowSize());

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="container" ref={menuContainer}>
          <div className="header-logo__container">
            <Link href="/">
              <Image
                placeholder="blur"
                className="header-logo__image"
                src={require("/public/logo.png")}
                width="120rem"
                height="45rem"
                alt="Evian Bliss Logo"
              />
            </Link>
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
              <Link href="/">
                <Image
                  placeholder="blur"
                  className="header-logo__image"
                  src={require("/public/logo.png")}
                  width="120rem"
                  height="45rem"
                  alt="Evian Bliss Logo"
                />
              </Link>
            </div>
          </div>

          <nav ref={desktopMenuRef}>
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
              <li className="dropdown">
                <a
                  id="sevices-dropdown"
                  className={cx({
                    "active-menu":
                      showSerices || pathname.includes("/services"),
                  })}
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
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Bridal Hair Service</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Cornrow</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Twists & Bantu</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Braids</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Bridal Hair Service</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Cornrow</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="category-list">
                      <h5>Twists & Bantu</h5>
                      <ul>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <a href="#">
                            Hair Dressing Bottox Hair Dressing Bottox
                          </a>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Hair Dressing Bottox</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/services/service-title`}>
                            <a>Braiding</a>
                          </Link>
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
                <Link href="/book-appointment">
                  <a
                    className={cx({
                      "active-menu": pathname == "/book-appointment",
                    })}
                  >
                    Book Appointment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <a
                    className={cx({
                      "active-menu": pathname == "/articles",
                    })}
                  >
                    Articles
                  </a>
                </Link>
              </li>
            </ul>
          </nav>

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
      </header>
    </>
  );
};

export default Header;
