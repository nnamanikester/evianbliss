import type { NextPage } from "next";
import Image from "next/future/image";
import { Appointment, Hero, Services } from "../components/home";
import config from "../config";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Hero />

      <Appointment />

      <Services />

      <section className="whychoose">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                alt="Evian Bliss Hair Spa Model"
                src={require("/public/images/evian-bliss-hair-model-2.jpg")}
                className="whychoose-image"
              />
            </div>
            <article className="col-7">
              <h3 className="mb-3">
                Why Choose <br />
                {config.APP_NAME.toUpperCase()}
              </h3>

              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem laudantium sit aliquid cupiditate ex quis eveniet
                architecto tenetur quod, voluptate sapiente, iusto non quaerat
                deleniti voluptates provident. Nam, possimus vitae?
              </p>

              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi et inventore molestias eius. Voluptas harum dolores
                earum nam nesciunt velit odit maxime vel minus mollitia libero,
                saepe debitis rem ut?
              </p>

              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                nihil ad iure sapiente velit in commodi eveniet cum doloribus.
                Iusto debitis, facilis blanditiis officiis dolor cumque tenetur
                dignissimos tempora explicabo.
              </p>

              <div className="row">
                <div className="col-4">
                  <h3>10 years</h3>
                  <span>of experience</span>
                </div>
                <div className="col-4">
                  <h3>97%</h3>
                  <span>of happy clients</span>
                </div>
                <div className="col-4">
                  <h3>24</h3>
                  <span>types of services</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <h3 className="mb-3">The Products We Use</h3>
          <div className="products-list mb-3">
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              placeholder="blur"
              blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
          </div>

          <div className="row mt-4">
            <div className="col-10">
              <p className="">
                We use high quality products for our hair treatments
              </p>
              <div className="underline">
                <div className="underline__progress" />
              </div>
            </div>
            <div className="col-2 arrows">
              <span className="arrows__left">{"<--------------"}</span>
              <span className="arrows__right">{"-------------->"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule">
        <div className="container">
          <div className="row">
            <div className="col-8 schedule-container">
              <h2>DON&apos;T WAIT!</h2>
              <h5 className="mb-3">Schedule Your Appointment</h5>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                ex adipisci voluptates. Ea voluptates nobis ipsam. Debitis
                voluptatem doloremque maiores, dolorum quasi voluptatum quos
                necessitatibus alias esse delectus voluptatibus? Consequuntur.
              </p>
              <a href="#" className="btn btn__primary mb-1">
                Book an appointment
              </a>
              <br />
              <a href={`tel:${config.PHONE}`} className="btn btn__secondary">
                {config.PHONE}
              </a>
            </div>
            <div className="col-4 text-right">
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                alt="Evian Bliss Hair Spa Schedule Appointment"
                src={require("/public/images/evian-bliss-hair-model-2.jpg")}
                className="schedule-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h3 className="mb-3">Reviews From Our Clients</h3>
          <div className="review-container">
            <div className="col-4 review">
              <div className="review-header mb-2">
                <p className="review-header__title">
                  Great Salon, I&apos;m Happy
                </p>
                <div className="review-header__logo-container">
                  <Image
                    placeholder="blur"
                    blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
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
                    blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                    alt="Google Logo"
                    src={require("/public/images/socials/google.png")}
                    className="review-footer__image"
                  />
                </div>
                <p className="review-footer__name">John Kester</p>
              </div>
            </div>
            <div className="col-4 review">
              <div className="review-header mb-2">
                <p className="review-header__title">
                  Great Salon, I&apos;m Happy
                </p>
                <div className="review-header__logo-container">
                  <Image
                    placeholder="blur"
                    blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
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
                    blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                    alt="Google Logo"
                    src={require("/public/images/socials/google.png")}
                    className="review-footer__image"
                  />
                </div>
                <p className="review-footer__name">John Kester</p>
              </div>
            </div>
            <div className="col-4 review">
              <div className="review-header mb-2">
                <p className="review-header__title">
                  Great Salon, I&apos;m Happy
                </p>
                <div className="review-header__logo-container">
                  <Image
                    placeholder="blur"
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
                    alt="Google Logo"
                    src={require("/public/images/socials/google.png")}
                    className="review-footer__image"
                  />
                </div>
                <p className="review-footer__name">John Kester</p>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-10">
              <p className="">Only honest reviews from our beloved clients</p>
              <div className="underline">
                <div className="underline__progress" />
              </div>
            </div>
            <div className="col-2 arrows">
              <span className="arrows__left">{"<--------------"}</span>
              <span className="arrows__right">{"-------------->"}</span>
            </div>
          </div>

          <div className="text-center mt-3">
            <a href="#" className="btn btn__primary">
              + Add a review
            </a>
          </div>
        </div>
      </section>

      <section className="photo-gallery">
        <div className="container">
          <h3 className="">Our Photo Gallery</h3>
          <p className="mb-3">
            {
              "Here you can look at the interior of our spa and the atmosphere that we have given you."
            }
          </p>

          <ul className="gallery">
            <li>
              <Image
                placeholder="blur"
                src={require("../public/images/evian-bliss-hair-model-2.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                src={require("../public/images/joyful-african.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                src={require("../public/images/joyful-african.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("../public/images/evian-bliss-hair-model-1.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("../public/images/evian-bliss-hair-model-3.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                src={require("../public/images/evian-bliss-hair-model-2.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("../public/images/jessica-felicio-braids.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("../public/images/joyful-african.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("../public/images/evian-bliss-hair-model-1.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
            <li>
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                src={require("../public/images/evian-bliss-hair-model-3.jpg")}
                alt="Evian Bliss Hair Spa Image Gallery"
                className=""
              />
              <div className="overlay">
                <h5>Evian Bliss Hair Style</h5>
              </div>
            </li>
          </ul>

          <div className="row mt-3">
            <div className="col-10">
              <p className="">Happy Viewing!</p>
              <div className="underline">
                <div className="underline__progress" />
              </div>
            </div>
            <div className="col-2 arrows">
              <span className="arrows__left">{"<--------------"}</span>
              <span className="arrows__right">{"-------------->"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="question">
        <div className="container">
          <div className="row">
            <div className="col-8 question-container">
              <h3 className="question__title">Have Questions?</h3>
              <h5 className="mb-3 question__subtitle">WE HAVE ANSWERS!</h5>
              <div className="form row">
                <div className="col-4 pr-1">
                  <input type="text" placeholder="Name" className="input" />
                </div>
                <div className="col-4 px-1">
                  <input type="text" placeholder="Phone" className="input" />
                </div>
                <div className="col-4 pl-1 mb-2">
                  <input type="text" placeholder="Email" className="input" />
                </div>
                <div className="col-12 mb-2">
                  <textarea
                    className="input"
                    placeholder="Type your question here..."
                    rows={2}
                  ></textarea>
                </div>
                <a href="#" className="btn btn__primary">
                  Book an appointment
                </a>
              </div>
            </div>
            <div className="col-4 text-right">
              <Image
                placeholder="blur"
                blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
                alt="Evian Bliss Hair Spa Question and Answer"
                src={require("/public/images/joyful-african.jpg")}
                className="question-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
