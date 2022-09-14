import * as React from "react";

interface AppointmentProps {}

export const Appointment: React.FC<AppointmentProps> = () => {
  return (
    <>
      <section className="appointment container">
        <div className="appointment__container">
          <h3 className="mb-2">
            Any Hair Texture You Have, We Make You Adore It!
          </h3>
          <form method="POST" action="">
            <div className="row mb-2">
              <div className="col-3 appointment-input">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-3 appointment-input">
                <input
                  className="input"
                  name="phone"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-3 appointment-input">
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
              <div className="col-3 appointment-input">
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
    </>
  );
};
