import type { NextPage } from "next";
import {
  Appointment,
  Hero,
  Products,
  Reviews,
  Schedule,
  Services,
  WhyChoose,
  PhotoGallery,
  Questions,
} from "../components/home";
import MetaTags from "../components/MetaTags";

const HomePage: NextPage = () => {
  return (
    <>
      <MetaTags />

      <div className="home">
        <Hero />

        <Appointment />

        <Services />

        <WhyChoose />

        <Products />

        <Schedule />

        <Reviews />

        <PhotoGallery />

        <Questions />
      </div>
    </>
  );
};

export default HomePage;
