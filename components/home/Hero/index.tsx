import Image from "next/future/image";
import React from "react";
import config from "../../../config";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <section className="hero">
        <div className="col-5 content">
          <h1 className="hero__title">{config.APP_NAME.toUpperCase()}</h1>
          <h2 className="sub-title">in Enugu.</h2>

          <ul className="my-4">
            <li>
              <span className="icon lni lni-certificate" />
              Hair specialists of the highest category
            </li>
            <li>
              <span className="icon lni lni-diamond-alt" />
              Premium Hair brands
            </li>
            <li>
              <span className="icon lni lni-crown" />
              Common quality and service standards
            </li>
            <li>
              <span className="icon lni lni-protection" />
              Customer saftey
            </li>
          </ul>
        </div>
        <div className="col-8 hero-image-container">
          <Image
            src={require("../../../public/images/evian-bliss-hair-model-2.jpg")}
            alt="Evian Bliss Hair Model Hero Image"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
