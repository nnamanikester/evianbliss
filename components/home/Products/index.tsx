import Image from "next/future/image";
import * as React from "react";
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
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/mega-growth.png")}
                alt="Evian Bliss Products"
                className="products-list__image"
              />
            </div>
            <div ref={productRef}>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("/public/images/products/soma.png")}
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
