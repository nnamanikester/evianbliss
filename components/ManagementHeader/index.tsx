import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface ManagementHeaderProps {
  title: string;
}

const ManagementHeader: React.FC<ManagementHeaderProps> = ({ title }) => {
  return (
    <div className="container">
      <div className="quick-links__header">
        <div className="quick-links__logo-container">
          <Link href="/">
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
        <h4>{title}</h4>
        <div className="quick-links__profile">
          <p className="bold">
            <span className="icon lni lni-user" />
            <span className="mx-1">My Account</span>
            <span className="icon lni lni-chevron-down" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementHeader;
