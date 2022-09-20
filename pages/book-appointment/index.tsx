import type { NextPage } from "next";
import Link from "next/link";
import MetaTags from "../../components/MetaTags";
import * as React from "react";
import AppointmentCalendar from "../../components/AppointmentCalendar";
import Image from "next/future/image";
import config from "../../config";
import Offer from "../../components/Offer";
import Breadcrum from "../../components/Breadcrum";
import { useRouter } from "next/router";

const AppointmentPage: NextPage = () => {
  const { query } = useRouter();
  const [isNewClient, setIsNewClient] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [fullname, setFullname] = React.useState("");

  React.useEffect(() => {
    if (query) {
      setEmail(query.email as string);
      setPhone(query.phone as string);
      setFullname(query.fullname as string);
    }
  }, [query]);

  return (
    <>
      <MetaTags
        title="Book An Appointment"
        url="https://evianbliss.com/book-appointment"
      />

      <div className="book-appointment">
        <div className="container mb-2">
          <Breadcrum
            links={[
              { title: "Home", url: "/", currentPage: false },
              { title: "Book Appointment", currentPage: true },
            ]}
          />

          <h1>Book An Appointment</h1>
        </div>

        <section className="request container">
          <div className="form col-7">
            <h4 className="mb-2">
              Fill in the below details to book our hair service appointment
            </h4>
            <div className="radio-group">
              <p className="mb-2">Are you a new client?</p>
              <div className="radio-box">
                <input
                  checked={isNewClient}
                  onChange={() => setIsNewClient(true)}
                  type="radio"
                  name="new_client"
                  id="new-client"
                />
                <label htmlFor="new-client">
                  <span className="bold ml-1">Yes,</span> I am a new client.
                </label>
              </div>
              <div className="radio-box">
                <input
                  checked={!isNewClient}
                  onChange={() => setIsNewClient(false)}
                  type="radio"
                  name="new_client"
                  id="existing-client"
                />
                <label htmlFor="existing-client">
                  <span className="bold ml-1">No,</span> I am an existing
                  client.
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-group col-6">
                <label htmlFor="fullname">
                  Full name <span className="required">*</span>
                </label>
                <input
                  value={fullname}
                  onChange={({ target }) => setFullname(target.value)}
                  placeholder="Enter your full name"
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="input"
                />
              </div>
              <div className="input-group col-6">
                <label htmlFor="phone-number">
                  Phone number <span className="required">*</span>
                </label>
                <input
                  value={phone}
                  onChange={({ target }) => setPhone(target.value)}
                  placeholder="Enter your phone number"
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  className="input"
                />
              </div>
              <div className="input-group col-6">
                <label htmlFor="email">Email address</label>
                <input
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  placeholder="Enter your email address"
                  type="email-address"
                  name="email"
                  id="email"
                  className="input"
                />
              </div>
              <div className="input-group col-6">
                <label htmlFor="email">Choose service</label>
                <input
                  placeholder="Choose a service"
                  type="text"
                  name="service"
                  id="service"
                  className="input"
                />
              </div>
              <div className="input-group col-12 mb-2">
                <label htmlFor="email">Pick a date</label>
                <AppointmentCalendar />
              </div>

              <p className="mb-2">
                NB: You will be contacted by one of our representatives as soon
                as possible to confirm your appointment date and time.
              </p>

              <a href="#" className="btn btn__primary btn__full-width">
                Book Appointment
              </a>
            </div>
          </div>
          <div className="col-4">
            <Offer />
          </div>
        </section>
      </div>
    </>
  );
};

export default AppointmentPage;
