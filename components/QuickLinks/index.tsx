import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import cx from "classnames";

interface QuickLinksProps {
  show: boolean;
}

const QuickLinks: React.FC<QuickLinksProps> = ({ show = true }) => {
  return (
    <>
      <div className={cx({ "quick-links": true, "show-quick-links": show })}>
        <div className="container">
          <div className="quick-links__header">
            <div className="quick-links__logo-container">
              <Link href="/management">
                <Image
                  placeholder="blur"
                  className="quick-links__logo"
                  src={require("/public/logo.png")}
                  width="120rem"
                  height="45rem"
                  alt="Evian Bliss Logo"
                />
              </Link>
            </div>
            <h3>Quick Links</h3>
            <div className="quick-links__profile">
              <p className="bold">
                <span className="icon lni lni-user" />
                <span className="mx-1">My Account</span>
                <span className="icon lni lni-chevron-down" />
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="quick-links__category">
            <h6>Managements</h6>
            <div className="row quick-links__link-container">
              <Link href="/management/service-categories">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-list" />
                    <span className="link-title">Service Categories</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-service" />
                    <span className="link-title">Services</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-calendar" />
                    <span className="link-title">Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-blogger" />
                    <span className="link-title">Articles</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-gallery" />
                    <span className="link-title">Gallery</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-wechat" />
                    <span className="link-title">Messages</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-users" />
                    <span className="link-title">Clients</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="quick-links__category">
            <h6>Reports</h6>
            <div className="quick-links__link-container row">
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
              <Link href="#">
                <div className="col-3 px-1 mb-1">
                  <div className="quick-links__link">
                    <span className="link-icon icon lni lni-user" />
                    <span className="link-title">Manage Appointments</span>
                  </div>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
