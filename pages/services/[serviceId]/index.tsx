import type { NextPage } from "next";
import { useRouter } from "next/router";
import MetaTags from "../../../components/MetaTags";

interface ServicePageProps {
  service: any;
}

const ServicePage: NextPage<ServicePageProps> = ({ service }) => {
  const { query } = useRouter();

  return (
    <>
      <MetaTags
        title={`${service.name ?? "Hair Styling"} Service`}
        url={`https://evianbliss.com/services/${query.serviceId}`}
      />

      <div className="service"></div>
    </>
  );
};

export default ServicePage;
