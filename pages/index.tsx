import type { GetServerSideProps, NextPage } from "next";
import Image from "next/future/image";
import {
  Appointment,
  Hero,
  Products,
  Reviews,
  Schedule,
  Services,
  WhyChoose,
} from "../components/home";
import MetaTags from "../components/MetaTags";
import config from "../config";

const HomePage: NextPage = () => {
  return (
    <>
      <MetaTags />

      <div className="home">
        <Hero />

        <Appointment />

        <Services />

        <WhyChoose />

        <Products />

        <Schedule />

        <Reviews />

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
                  blurDataURL={config.BLUR_URL}
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
                  blurDataURL={config.BLUR_URL}
                  src={require("../public/images/evian-bliss-hair-model-3.jpg")}
                  alt="Evian Bliss Hair Spa Image Gallery"
                  className=""
                  style={{ width: "auto", height: "auto" }}
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
                  blurDataURL={config.BLUR_URL}
                  src={require("../public/images/jessica-felicio-braids.jpg")}
                  alt="Evian Bliss Hair Spa Image Gallery"
                  className=""
                  style={{ width: "auto", height: "auto" }}
                />
                <div className="overlay">
                  <h5>Evian Bliss Hair Style</h5>
                </div>
              </li>
              <li>
                <Image
                  placeholder="blur"
                  blurDataURL={config.BLUR_URL}
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
                  blurDataURL={config.BLUR_URL}
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
                  blurDataURL={config.BLUR_URL}
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
                  blurDataURL={config.BLUR_URL}
                  alt="Evian Bliss Hair Spa Question and Answer"
                  src={require("/public/images/joyful-african.jpg")}
                  className="question-image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
