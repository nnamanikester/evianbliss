import type { NextPage } from "next";
import MetaTags from "../../components/MetaTags";

const PricesPage: NextPage = () => {
  return (
    <>
      <MetaTags title="Prices" url="https://evianbliss.com/prices" />

      <div className="prices"></div>
    </>
  );
};

export default PricesPage;
