import type { NextPage } from "next";
import Image from "next/future/image";

const Home: NextPage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="col-5 content">
          <div>
            <h1>
              SKIN & BEAUTY <br />
              CENTER
            </h1>
            <h2 className="sub-title">in Los Angeles</h2>

            <ul className="mt-4">
              <li>
                <span className="icon">[ ] </span>
                Specialists of the highest category
              </li>
              <li>
                <span className="icon">[ ] </span>
                Premium Cosmetic brands
              </li>
              <li>
                <span className="icon">[ ] </span>
                Common quality and service standards
              </li>
              <li>
                <span className="icon">[ ] </span>
                Customer saftey
              </li>
            </ul>
          </div>
        </div>
        <div className="col-7 hero-image-container">
          <Image
            alt="Hero Image"
            src={require("/public/images/black-hair-hero.jpg")}
            className="hero-image"
          />
        </div>
      </section>
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
