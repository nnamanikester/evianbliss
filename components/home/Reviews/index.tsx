import Image from "next/future/image";
import * as React from "react";
import config from "../../../config";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SliderNavigation from "../../SliderNavigation";
import useSWR from "swr";
import { fetcher } from "../../../utils";
import { ReviewT } from "../../../types";

interface ReviewsProps {}

const REVIEW_URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${config.GOOGLE_PLACE_ID}&fields=reviews&key=${config.GOOGLE_API_KEY}`;

export const Reviews: React.FC<ReviewsProps> = () => {
  const reviewsRef = React.useRef(null);
  const [reviews, setReviews] = React.useState<ReviewT[]>([]);

  const { data, error } = useSWR(REVIEW_URL, fetcher);

  React.useEffect(() => {
    if (data) {
      setReviews(data.result.reviews);
    } else if (error) {
      // console.log(error);
    }
  }, [data, error]);

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
            {reviews.map((rev) => (
              <SwiperSlide key={rev.time}>
                <div className="review" ref={reviewsRef}>
                  <div className="review-header mb-2">
                    <p className="review-header__title">Google review</p>
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
                    <p>{rev.text}</p>
                  </div>
                  <div className="review-footer">
                    <div className="">
                      <Image
                        placeholder="blur"
                        blurDataURL={config.BLUR_URL}
                        alt="Google Logo"
                        src={rev.profile_photo_url}
                        className="review-footer__image"
                        width={80}
                        height={80}
                      />
                    </div>
                    <p className="review-footer__name">{rev.author_name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

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
