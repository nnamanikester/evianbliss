import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import MetaTags from "../../../components/MetaTags";

interface ServicePageProps {
  service: {
    name: string;
  };
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

export const getStaticProps: GetStaticProps<ServicePageProps> = async () => {
  return {
    props: {
      service: {
        name: "Hair Styling Braids",
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          serviceId: "service-title",
        },
      },
      {
        params: {
          serviceId: "service-title-1",
        },
      },
      {
        params: {
          serviceId: "service-title-2",
        },
      },
    ],
    fallback: false,
  };
};

export default ServicePage;
