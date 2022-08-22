import * as React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <p>This is the footer</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
