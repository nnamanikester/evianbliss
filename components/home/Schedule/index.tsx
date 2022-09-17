import Image from "next/future/image";
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
