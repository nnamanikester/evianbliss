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
          <form method="GET" action="/book-appointment">
            <div className="row mb-2">
              <div className="col-4 appointment-input">
                <input
                  className="input"
                  name="fullname"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="col-4 appointment-input">
                <input
                  className="input"
                  name="phone"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-4 appointment-input">
                <input
                  className="input"
                  name="email"
                  type="email-address"
                  placeholder="Email address"
                />
              </div>
            </div>

            <button className="btn btn__primary" type="submit">
              Book an appointment
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;
