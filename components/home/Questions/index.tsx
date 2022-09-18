import Image from "next/future/image";
import * as React from "react";
import config from "../../../config";

interface QuestionsProps {}

export const Questions: React.FC<QuestionsProps> = () => {
  return (
    <>
      <section className="question">
        <div className="container">
          <div className="row question-row">
            <div className="col-8 question-container">
              <h3 className="question__title">Have Questions?</h3>
              <h5 className="mb-3 question__subtitle">WE HAVE ANSWERS!</h5>
              <div className="form row">
                <div className="col-4 pr-1 input-container">
                  <input type="text" placeholder="Name" className="input" />
                </div>
                <div className="col-4 px-1 input-container">
                  <input type="text" placeholder="Phone" className="input" />
                </div>
                <div className="col-4 pl-1 mb-2 input-container">
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
    </>
  );
};

export default Questions;
