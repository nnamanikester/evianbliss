import Image from "next/future/image";
import * as React from "react";

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = () => {
  return (
    <>
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
                    <span className="icon lni lni-chevron-down" />
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
                    <span className="icon lni lni-chevron-up" />
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
                    <span className="icon lni lni-chevron-down" />
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
    </>
  );
};

export default Services;
