import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Breadcrum from "../../../components/Breadcrum";
import MetaTags from "../../../components/MetaTags";
import Offer from "../../../components/Offer";
import config from "../../../config";
import { getService, getServices } from "../../../controllers";
import { ServiceT } from "../../../types";
import { formatMoney } from "../../../utils";
import renderHTML from "react-render-html";

interface ServicePageProps {
  service: ServiceT;
}

const ServicePage: NextPage<ServicePageProps> = ({ service }) => {
  const { query } = useRouter();

  return (
    <>
      <MetaTags
        image={service.image || undefined}
        title={`${service.name ?? "Hair Styling"} Service`}
        url={`https://evianbliss.com/services/${query.serviceId}`}
        description={`${service.name} - All you need to know about ${service.name}. Description, requirements, pricing. Love your hair, Love the texture!`}
      />

      <div className="service">
        <div className="container">
          <Breadcrum
            links={[
              { title: "Home", url: "/", currentPage: false },
              { title: "Services", url: "/services", currentPage: false },
              { title: service.name, currentPage: true },
            ]}
          />

          <div className="service-parallax">
            <Image
              placeholder="blur"
              blurDataURL={config.BLUR_URL}
              alt={`Evian Bliss Hair Spa in Enugu - ${service.name}`}
              src={require("/public/images/blog-background.jpg")}
            />
            <h1 className="service-title">{service.name}</h1>
          </div>
        </div>

        <div className="container">
          <div className="service-box row">
            <div className="col-8 content-box">
              <h3>
                {config.SHORT_NAME} {service.name}
              </h3>
              <br />
              {renderHTML(service.description)}
            </div>
            <div className="col-3 offer-box">
              <div className="service-details col-6">
                <div className="service-image">
                  {service.image && (
                    <Image
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt={`Evian Bliss Hair Spa in Enugu - ${service.name}`}
                      src={service.image}
                    />
                  )}
                </div>
                <p className="service-price">
                  <span className="text-primary bold"> Price: </span>
                  <span className="bold">
                    {service.fixedPrice
                      ? formatMoney(service.fixedPrice.toString())
                      : `${formatMoney(`${service.priceFrom}`)} – ${formatMoney(
                          `${service.priceTo}`
                        )}`}
                  </span>
                </p>
                <p className="service-duration">
                  <span className="text-primary bold"> Duration: </span>{" "}
                  <span className="bold">{service.duration}</span>
                </p>
              </div>
              <Offer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const serviceId = context.params?.serviceId;
  const service = await getService({ slug: serviceId as string });
  console.log(service);

  return {
    props: {
      service: JSON.parse(JSON.stringify(service)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let services: ServiceT[] = [];

  try {
    services = await getServices();
  } catch (e: any) {
    console.log(e.message);
  }

  return {
    paths: services.map((serv) => ({
      params: {
        serviceId: serv.slug,
      },
    })),
    fallback: false,
  };
};

export default ServicePage;
