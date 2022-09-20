import Image from "next/future/image";
import Link from "next/link";
import * as React from "react";
import config from "../../config";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer container">
        <div className="row footer-row">
          <div className="col-5 mb-2">
            <div className="footer-logo__container">
              <div>
                <Link href="/">
                  <Image
                    placeholder="blur"
                    className="footer-logo__image"
                    src={require("/public/logo.png")}
                    alt="Evian Bliss Logo"
                  />
                </Link>
                <ul className="footer-socials mt-2">
                  <li>
                    <a
                      className="ml-1"
                      target="__blank"
                      href={`https://facebook.com/${config.FACEBOOK}`}
                    >
                      <span className="lni lni-facebook-original icon-small" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="ml-1"
                      target="__blank"
                      href={`https://twitter.com/${config.TWITTER}`}
                    >
                      <span className="lni lni-twitter-original icon-small" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="__blank"
                      href={`https://instagram.com/${config.INSTAGRAM}`}
                    >
                      <span className="lni lni-instagram-original icon-small" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="__blank"
                      href={`https://wa.me/${config.WHATSAPP}`}
                    >
                      <span className="lni lni-whatsapp icon-small" />
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="footer-menu">
                <li>
                  <Link href="/prices">
                    <a>Prices</a>
                  </Link>
                </li>
                <li>
                  <Link href="/articles">
                    <a>Articles</a>
                  </Link>
                </li>
                <li>
                  <Link href="/book-appointment">
                    <a>Book Appointment</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 mb-2 pr-2">
            <h6 className="mb-2">
              <span className="lni lni-map-marker" /> Locations:
            </h6>
            <a target="__blank" href={config.MAP_URL} rel="nofollow">
              4 Presidential Road, Nkponkiti Junction, Independence Layout,
              400102, Enugu.
            </a>
          </div>
          <div className="col-2 mb-2">
            <h6 className="mb-2">
              <span className="lni lni-alarm-clock" /> Our Hours:{" "}
            </h6>
            <p>Tue-Fri: 9am - 5pm</p>
            <p>Sat,Mon: 10am - 5pm</p>
          </div>
          <div className="col-2 mb-2">
            <h6 className="mb-2">
              <span className="lni lni-headphone-alt" /> Contact:
            </h6>
            <p className="mb-1">
              <span className="icon  ion-ios-mail icon-small mr-1" />
              <a href="mailto:evianbliss@gmail.com" rel="nofollow">
                evianbliss@gmail.com
              </a>
            </p>
            <p>
              <span className="icon lni lni-phone icon-small mr-1" />
              <a href="tel:+2348022164416" rel="nofollow">
                +234 802 216 4416
              </a>
            </p>
          </div>
        </div>

        <div className="footer-credit mt-3">
          <p className="text-center">
            &copy; {new Date().getFullYear()} {config.APP_NAME} - All Rights
            Reseved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
