import * as React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <section className="header">
        <div>
          <p>This is the Header</p>
        </div>
      </section>
    </>
  );
};

export default Header;
