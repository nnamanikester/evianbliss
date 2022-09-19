import Link from "next/link";
import * as React from "react";
import cx from "classnames";

interface BreadcrumLinkT {
  url?: string;
  title: string;
  currentPage: boolean;
}

interface BreadcrumProps {
  links: BreadcrumLinkT[];
}

const Breadcrum: React.FC<BreadcrumProps> = ({ links }) => {
  return (
    <>
      <ul className="breadcrum">
        {links.map((item) => (
          <li
            key={item.url}
            className={cx({
              "breadcrum-previous": !item.currentPage,
              "breadcrum-current": item.currentPage,
            })}
          >
            {item.currentPage ? (
              <a>{item.title}</a>
            ) : (
              <Link href={item.url || ""}>{item.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Breadcrum;
