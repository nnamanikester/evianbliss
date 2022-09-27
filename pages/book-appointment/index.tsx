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
import { ServiceCategoryT, ServiceT, SlotT } from "../../types";
import toast from "react-hot-toast";
import axios from "axios";
import dayjs from "dayjs";

const AppointmentPage: NextPage = () => {
  const { query } = useRouter();
  const [isNewClient, setIsNewClient] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [timeSlot, setTimeSlot] = React.useState<SlotT>();
  const [selectedService, setSelectedService] =
    React.useState<ServiceCategoryT>();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (query) {
      setEmail(query.email as string);
      setPhone(query.phone as string);
      setFullname(query.fullname as string);
    }
  }, [query]);

  const validateInput = () => {
    if (!fullname) return "Your full name is required.";
    if (!phone) return "Your phone number is required.";
    if (!email) return "An email address is required.";
    if (!timeSlot) return "Please select a time slot";

    return true;
  };

  const resetInput = () => {
    setIsNewClient(true);
    setFullname("");
    setEmail("");
    setPhone("");
    setTimeSlot(undefined);
  };

  const bookAppointment = async (e: any) => {
    e.preventDefault();

    if (typeof validateInput() === "string") {
      return toast.error(validateInput() as string, {
        position: "bottom-center",
      });
    }

    setIsLoading(true);
    try {
      toast.loading("Booking an appointment...", { position: "bottom-center" });
      const res = await axios.post("/api/appointments", {
        fullname,
        phone,
        email,
        service: selectedService?.name,
        time: dayjs(`${timeSlot?.date} ${timeSlot?.time}`).toISOString(),
        returning: isNewClient,
      });
      console.log(res.data);
      toast.dismiss();
      setIsLoading(false);
      toast.success(
        "You have successfully booked an appointment.\nWe will be in touch with you as soon as possible.",
        { position: "bottom-center", duration: 5000 }
      );
      resetInput();
    } catch (e: any) {
      toast.dismiss();
      setIsLoading(false);
      toast.error(
        "An error occured while trying to request an appointment. Please try again!\nIf problem persist, contact us.",
        { position: "bottom-center", duration: 10000 }
      );
      console.log(e?.response?.data || e?.message);
    }
  };

  return (
    <>
      <MetaTags
        title="Book An Appointment"
        url="https://evianbliss.com/book-appointment"
        description={`You want to have a taste of ${config.SHORT_NAME} best natural hair services, why wait? Schedule an appointment with us.`}
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
            <form action="#" onSubmit={bookAppointment}>
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
                    required
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
                    required
                  />
                </div>
                <div className="input-group col-6">
                  <label htmlFor="email">Email address *</label>
                  <input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Enter your email address"
                    type="email-address"
                    name="email"
                    id="email"
                    className="input"
                    required
                  />
                </div>
                <div className="input-group col-6">
                  <label htmlFor="email">Choose service</label>
                  <input
                    placeholder="Choose a service"
                    type="text"
                    name="service"
                    className="input input-select"
                  />
                  <div className="select-list">
                    <ul>
                      <li>Bantu Nuts</li>
                      <li>Twists</li>
                      <li>Bridal Hair Service</li>
                      <li>Natural Hair Twists</li>
                      <li>Ghana Weaving</li>
                      <li>Natural Hair UPDO</li>
                      <li>Bantu Nuts</li>
                      <li>Twists</li>
                      <li>Bridal Hair Service</li>
                      <li>Natural Hair Twists</li>
                      <li>Ghana Weaving</li>
                      <li>Natural Hair UPDO</li>
                      <li>Bantu Nuts</li>
                      <li>Twists</li>
                      <li>Bridal Hair Service</li>
                      <li>Natural Hair Twists</li>
                      <li>Ghana Weaving</li>
                      <li>Natural Hair UPDO</li>
                    </ul>
                  </div>
                </div>
                <div className="input-group col-12 mb-2">
                  <label htmlFor="email">Pick a date</label>
                  <AppointmentCalendar
                    timeSlot={timeSlot}
                    onSelectSlot={setTimeSlot}
                  />
                </div>
              </div>

              <p className="mb-2">
                NB: You will be contacted by one of our representatives as soon
                as possible to confirm your appointment date and time.
              </p>

              <button
                type="submit"
                className="btn btn__primary btn__full-width"
                disabled={isLoading}
              >
                Book Appointment
              </button>
            </form>
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
