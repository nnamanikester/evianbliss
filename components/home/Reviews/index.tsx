import Image from "next/future/image";
import * as React from "react";
import config from "../../../config";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SliderNavigation from "../../SliderNavigation";

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = () => {
  const reviewsRef = React.useRef(null);

  return (
    <>
      <section className="reviews">
        <div className="container">
          <h3 className="mb-3">Reviews From Our Clients</h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            onSwiper={console.log}
            className="review-container"
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review" ref={reviewsRef}>
                <div className="review-header mb-2">
                  <p className="review-header__title">
                    Great Salon, I&apos;m Happy
                  </p>
                  <div className="review-header__logo-container">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-header__logo"
                    />
                  </div>
                </div>
                <div className="review-body mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore optio, nulla vero libero impedit ut voluptatum ipsum
                    tempore neque consequatur quibusdam aliquam! Omnis iure
                    consectetur odio aperiam veniam. Voluptate, odio?
                  </p>
                </div>
                <div className="review-footer">
                  <div className="">
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Google Logo"
                      src={require("/public/images/socials/google.png")}
                      className="review-footer__image"
                    />
                  </div>
                  <p className="review-footer__name">John Kester</p>
                </div>
              </div>
            </SwiperSlide>

            <SliderNavigation
              type="swiper"
              text="Only honest reviews from our beloved clients."
            />
          </Swiper>

          <div className="text-center mt-3">
            <a
              target="__blank"
              href={config.REVIEW_URL}
              className="btn btn__primary"
              rel="nofollow"
            >
              + Add a review
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
