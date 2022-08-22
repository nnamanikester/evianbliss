import Image from "next/image";
import * as React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer container">
        <div className="row">
          <div className="col-5 mb-2">
            <div className="footer-logo__container">
              <Image
                className="footer-logo__image"
                src={require("/public/logo.png")}
                width="120rem"
                height="28rem"
                alt="Evian Bliss Logo"
              />
              <ul className="footer-menu">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <a href="#">Prices</a>
                </li>
                <li>
                  <a href="#">Promo</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 mb-2">
            <h6 className="mb-2">[ ] Locations:</h6>
            <a href="">
              4 Presidential Road, Nkponkiti Junction, 400102, Enugu.
            </a>
          </div>
          <div className="col-2 mb-2">
            <h6 className="mb-2">[ ] Our Hours: </h6>
            <p>Tue-Fri: 9am - 5pm</p>
            <p>Sat,Mon: 10am - 5pm</p>
          </div>
          <div className="col-2 mb-2">
            <h6 className="mb-2">[ ] Contact: </h6>
            <p>
              Email:
              <a href="mailto:evianbliss@gmail.com"> evianbliss@gmail.com</a>
            </p>
            <p>
              Phone Number:
              <a href="tel:+2348022164416"> +234 802 216 4416</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
