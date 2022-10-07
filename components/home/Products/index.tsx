import Image from "next/future/image";
import * as React from "react";
import config from "../../../config";
import Carousel from "../../Carousel";
import SliderNavigation from "../../SliderNavigation";

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = () => {
  const productRef = React.useRef(null);

  return (
    <>
      <section className="products">
        <div className="container">
          <h3 className="mb-3">The Products We Use</h3>
          <Carousel
            itemRef={productRef}
            text="We use high quality products for our hair treatments"
            componentClasses="products-list mb-3"
          >
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products - mega growth"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products - Soma"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/products/darling.svg")}
                alt="Evian Bliss Products - Darling"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/products/x-pression.png")}
                alt="Evian Bliss Products - Xpression"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/products/lotabody.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/products/olive.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Products;
