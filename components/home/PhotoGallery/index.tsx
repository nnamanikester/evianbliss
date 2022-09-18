import Image from "next/future/image";
import * as React from "react";
import { Swiper } from "swiper/react";
import config from "../../../config";
import Carousel from "../../Carousel";
import SliderNavigation from "../../SliderNavigation";

interface PhotoGalleryProps {}

export const PhotoGallery: React.FC<PhotoGalleryProps> = () => {
  const itemRef = React.useRef(null);

  return (
    <>
      <section className="photo-gallery">
        <div className="container">
          <h3 className="">Our Photo Gallery</h3>
          <p className="mb-3">
            {
              "Here you can look at the interior of our spa and the atmosphere that we have given you."
            }
          </p>

          <Carousel
            text="Happy Viewing!"
            itemRef={itemRef}
            componentClasses="gallery"
          >
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                src={require("/public/images/evian-bliss-hair-model-2.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                blurDataURL={config.BLUR_URL}
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                src={require("/public/images/joyful-african.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                blurDataURL={config.BLUR_URL}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                src={require("/public/images/joyful-african.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                blurDataURL={config.BLUR_URL}
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/evian-bliss-hair-model-1.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/evian-bliss-hair-model-3.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                src={require("/public/images/evian-bliss-hair-model-2.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                blurDataURL={config.BLUR_URL}
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/jessica-felicio-braids.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/joyful-african.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/evian-bliss-hair-model-1.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li ref={itemRef}>
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                src={require("/public/images/evian-bliss-hair-model-3.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;
