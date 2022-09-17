import type { NextPage } from "next";
import MetaTags from "../../components/MetaTags";

const AboutPage: NextPage = () => {
  return (
    <>
      <MetaTags title="About Us" url="https://evianbliss.com/about" />

      <div className="about"></div>
    </>
  );
};

export default AboutPage;
