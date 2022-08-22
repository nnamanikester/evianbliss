import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>SKIN & BEAUTY CENTER</h1>
      <h2>Meet Our Team</h2>
      <h3>Botox – Is It Right For Your?</h3>
      <h4>Laser Hair Removal</h4>
      <h5>Schedule Your Appointment</h5>
      <h6>Heading 6</h6>
      <p>Paragraph</p>
      <a href="#" className="btn">
        Book an appointment
      </a>
      <input className="input" type="text" placeholder="Name" />
      <a href="#">Learn more</a>
    </div>
  );
};

export default Home;
