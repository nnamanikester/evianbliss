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

              <div className="row experience">
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
    </>
  );
};

export default WhyChoose;
