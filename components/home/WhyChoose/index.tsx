import Image from "next/future/image";
import * as React from "react";
import config from "../../../config";

interface WhyChooseProps {}

export const WhyChoose: React.FC<WhyChooseProps> = () => {
  return (
    <>
      <section className="whychoose">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
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
                Most people think that having a natural hair is the cause of
                pains while making their hair, But the real reason is they have
                the wrong people managing their hair.
              </p>

              <p className="mb-2">
                For the past few years, we have received complaints from a lot
                of clients and it all boils down to; being scared of touching
                their natural hair because it's painful and it doesn't last.
              </p>

              <p className="mb-3">
                {config.APP_NAME} specializes on natural hair treatments. We
                nurture, groom, treat and style all natural hair regardless of
                the texture. We have natural hair experts that have been into
                the natural hair management for over 5 years and ensures our
                clients have painless hair experience.
              </p>

              <div className="row experience">
                <div className="col-4">
                  <h3>5 years+</h3>
                  <span>experience</span>
                </div>
                <div className="col-4">
                  <h3>99%</h3>
                  <span>happy clients</span>
                </div>
                <div className="col-4">
                  <h3>24+</h3>
                  <span>services</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
