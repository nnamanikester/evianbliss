import type { NextPage } from "next";
import MetaTags from "../../components/MetaTags";

const AppointmentPage: NextPage = () => {
  return (
    <>
      <MetaTags
        title="Book An Appointment"
        url="https://evianbliss.com/book-appointment"
      />

      <div className="appointment"></div>
    </>
  );
};

export default AppointmentPage;
