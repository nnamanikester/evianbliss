import Image from "next/future/image";
import Link from "next/link";
import * as React from "react";
import config from "../../../config";

interface ScheduleProps {}

export const Schedule: React.FC<ScheduleProps> = () => {
  return (
    <>
      <section className="schedule">
        <div className="container">
          <div className="row schedule-row">
            <div className="col-8 schedule-container">
              <h2>DON&apos;T WAIT!</h2>
              <h5 className="mb-3">Schedule Your Appointment</h5>
              <p className="mb-3">
                You want to have a taste of the best natural hair services, why
                wait? Schedule an appointment with us and one of our
                representatives will respond to you as soon as possible.
              </p>
              <Link href="/book-appointment">
                <a className="btn btn__primary mb-1">Book an appointment</a>
              </Link>
              <br />
              <a href={`tel:${config.PHONE}`} className="btn btn__secondary">
                {config.PHONE}
              </a>
            </div>
            <div className="col-4 text-right schedule-image-container">
              <Image
                placeholder="blur"
                blurDataURL={config.BLUR_URL}
                alt="Evian Bliss Hair Spa Schedule Appointment"
                src={require("/public/images/joyful-african.jpg")}
                className="schedule-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
