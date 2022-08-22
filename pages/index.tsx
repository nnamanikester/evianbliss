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

            <ul className="my-4">
              <li>
                <span className="icon">(O)</span>
                Specialists of the highest category
              </li>
              <li>
                <span className="icon">(O)</span>
                Premium Cosmetic brands
              </li>
              <li>
                <span className="icon">(O)</span>
                Common quality and service standards
              </li>
              <li>
                <span className="icon">(O)</span>
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

      <section className="appointment container">
        <div className="py-3 px-4">
          <h3 className="mb-2">Enhance Your Appearance at Our Beauty Center</h3>
          <form method="POST" action="">
            <div className="row mb-2">
              <div className="col-3 pr-1">
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-3 px-1">
                <input
                  className="input"
                  name="phone"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-3 px-1">
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
              <div className="col-3 pl-1">
                <input
                  className="input"
                  name="date"
                  type="date"
                  placeholder="Date & time"
                />
              </div>
            </div>

            <a href="#" className="btn" type="submit">
              Book an appointment
            </a>
          </form>
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
