import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Breadcrum from "../../../components/Breadcrum";
import MetaTags from "../../../components/MetaTags";
import Offer from "../../../components/Offer";
import config from "../../../config";
import { formatMoney } from "../../../utils";

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
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem, expedita voluptatum? Quam quos similique reprehenderit
                placeat ad! Harum, animi reiciendis dolores, accusantium
                laboriosam, culpa eum ad quod minus veniam est!
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem, expedita voluptatum? Quam quos similique reprehenderit
                placeat ad! Harum, animi reiciendis dolores, accusantium
                laboriosam, culpa eum ad quod minus veniam est! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Labore sit aliquam
                rem facilis suscipit enim accusantium maxime architecto
                dignissimos. Maiores, pariatur. Illo atque dolore quidem quis
                corporis consectetur! Consequatur, rem?
              </p>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quidem, expedita voluptatum? Quam quos similique reprehenderit
                placeat ad! Harum, animi reiciendis dolores, accusantium
                laboriosam, culpa eum ad quod minus veniam est! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Labore sit aliquam
                rem facilis suscipit enim accusantium maxime architecto
                dignissimos. Maiores, pariatur. Illo atque dolore quidem quis
                corporis consectetur! Consequatur, rem?
              </p>
            </div>
            <div className="col-3 offer-box">
              <div className="service-details col-6">
                <div className="service-image">
                  <Image
                    placeholder="blur"
                    blurDataURL={config.BLUR_URL}
                    alt={`Evian Bliss Hair Spa in Enugu - ${service.name}`}
                    src={require("/public/images/evian-bliss-hair-model-2.jpg")}
                  />
                </div>
                <p className="service-price">
                  <span className="text-primary bold"> Price: </span>
                  <span className="bold">{`${formatMoney(
                    "1000"
                  )} – ${formatMoney("15000")}`}</span>
                </p>
                <p className="service-duration">
                  <span className="text-primary bold"> Duration: </span>{" "}
                  <span className="bold">3 hrs 45 mins</span>
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
