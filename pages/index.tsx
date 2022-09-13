import type { NextPage } from "next";
import Image from "next/future/image";
import NextImage from "next/image";
import config from "../config";

const Home: NextPage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="col-5 content">
          <div>
            <h1>
              SKIN & BEAUTY <br />
              CENTER
            </h1>
            <h2 className="sub-title">in Los Angeles</h2>

            <ul className="my-4">
              <li>
                <span className="icon">(O)</span>
                Specialists of the highest category
              </li>
              <li>
                <span className="icon">(O)</span>
                Premium Cosmetic brands
              </li>
              <li>
                <span className="icon">(O)</span>
                Common quality and service standards
              </li>
              <li>
                <span className="icon">(O)</span>
                Customer saftey
              </li>
            </ul>
          </div>
        </div>
        <div className="col-8 hero-image-container"></div>
      </section>

      <section className="appointment container">
        <div className="py-3 px-4">
          <h3 className="mb-2">Enhance Your Appearance at Our Beauty Center</h3>
          <form method="POST" action="">
            <div className="row mb-2">
              <div className="col-3 pr-1">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-3 px-1">
                <input
                  className="input"
                  name="phone"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-3 px-1">
                <select
                  placeholder="Choose service"
                  className="input"
                  name="service"
                >
                  <option>Hair dressing</option>
                  <option>Braiding</option>
                  <option>Parking Gel</option>
                  <option>Weaving</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="col-3 pl-1">
                <input
                  className="input"
                  name="date"
                  type="date"
                  placeholder="Date & time"
                />
              </div>
            </div>

            <a href="#" className="btn btn__primary" type="submit">
              Book an appointment
            </a>
          </form>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="mb-3">
            <h2>
              Our Core Beauty
              <br />
              Center Services
            </h2>
          </div>
          <div className="row">
            <div className="accordion col-3 pr-4">
              <ul className="accordion__list">
                <li className="accordion__item">
                  <a href="#">
                    <span>Service Category 1</span>
                    <span className="icon">[ ]</span>
                  </a>

                  <ul className="accordion__content">
                    <li className="accordion__content-item">
                      <a href="#">Eyes</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">Face</a>
                    </li>
                    <li className="accordion__content-item accordion__content-item--active">
                      <a href="#">TMJ</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">For Men</a>
                    </li>
                  </ul>
                </li>
                <li className="accordion__item accordion__item--open">
                  <a href="#">
                    <span>Service Category 2 </span>
                    <span className="icon">[ ]</span>
                  </a>

                  <ul className="accordion__content">
                    <li className="accordion__content-item">
                      <a href="#">Eyes</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">Face</a>
                    </li>
                    <li className="accordion__content-item accordion__content-item--active">
                      <a href="#">TMJ</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">For Men</a>
                    </li>
                  </ul>
                </li>
                <li className="accordion__item">
                  <a href="#">
                    <span>Service Category 3 </span>
                    <span className="icon">[ ]</span>
                  </a>

                  <ul className="accordion__content">
                    <li className="accordion__content-item">
                      <a href="#">Eyes</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">Face</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">For Men</a>
                    </li>
                    <li className="accordion__content-item">
                      <a href="#">TMJ</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-9 pl-4 service">
              <h5>Botox</h5>
              <div className="row">
                <div className="col-8">
                  <h5 className="mb-2 bold text-dark">TMJ</h5>
                  <p className="mb-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati, numquam. Consequatur explicabo, dolore velit
                    sequi repellat nobis ad possimus molestias non amet facilis
                    natus commodi. Explicabo aspernatur iusto dolorum veniam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati, numquam. Consequatur explicabo, dolore velit
                    sequi repellat nobis ad possimus molestias non amet facilis
                    natus commodi. Explicabo aspernatur iusto dolorum veniam.
                  </p>

                  <a href="#" className="btn btn__primary mt-2">
                    Book an appointment
                  </a>
                </div>
                <div className="col-4 service__image-container">
                  <Image
                    alt="Evian Bliss Hair Spa Model"
                    src={require("/public/images/evian-bliss-hair-model-1.jpg")}
                    className="service__image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whychoose">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Image
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
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              src={require("../public/images/products/soma.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
              src={require("../public/images/products/mega-growth.png")}
              alt="Evian Bliss Products"
              className="products-list__image"
            />
            <Image
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
