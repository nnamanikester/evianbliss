import type { NextPage } from "next";
import Breadcrum from "../../components/Breadcrum";
import MetaTags from "../../components/MetaTags";
import * as React from "react";
import cx from "classnames";
import Offer from "../../components/Offer";
import { formatMoney } from "../../utils";

interface ServiceT {
  id: string;
  name: string;
  duration?: string;
  priceFrom?: number;
  priceTo?: number;
  fixedPrice?: number;
}

interface CategoryT {
  id: string;
  category: string;
  services: Array<ServiceT>;
}

const PricesPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryT>();

  const services: CategoryT[] = React.useMemo(
    () => [
      {
        id: "braids-category",
        category: "Braids",
        services: [
          {
            id: "ghana-baids-service",
            name: "Ghana Braids",
            priceFrom: 2000,
            priceTo: 15000,
          },
          {
            id: "ghana-baids-service-2",
            name: "Ghana Braids 2",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
          {
            id: "ghana-baids-service-3",
            name: "Ghana Braids 3",
            priceFrom: 2000,
            priceTo: 15000,
          },
          {
            id: "ghana-baids-service-4",
            name: "Ghana Braids 4",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
        ],
      },
      {
        id: "twists-category",
        category: "Twists & Bantu",
        services: [
          {
            id: "twists-service",
            name: "Natural Hair Twist",
            priceFrom: 2000,
            priceTo: 15000,
          },
          {
            id: "twist-service-2",
            name: "Natural Hair Twist 2",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
          {
            id: "twist-service-3",
            name: "Natural Hair Twist 3",
            priceFrom: 2000,
            priceTo: 15000,
          },
        ],
      },
      {
        id: "bridal-hair-category",
        category: "Bridal Hair Service",
        services: [
          {
            id: "bridal-hair-service",
            name: "Igba Nkwu",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
          {
            id: "bridal-hair-service-1",
            name: "Igba Nkwu 1",
            priceFrom: 2000,
            priceTo: 15000,
          },
          {
            id: "bridal-hair-service-2",
            name: "Igba Nkwu 2",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
          {
            id: "bridal-hair-service-3",
            name: "Igba Nkwu 3",
            priceFrom: 2000,
            priceTo: 15000,
          },
          {
            id: "bridal-hair-service-4",
            name: "Igba Nkwu 4",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
        ],
      },
      {
        id: "gelup-category",
        category: "Gelup/Ponytail",
        services: [
          {
            id: "gelup-service",
            name: "Natural Hair Gelup",
            priceFrom: 2000,
            priceTo: 15000,
          },
          {
            id: "gelup-service-2",
            name: "Natural Hair Gelup 2",
            fixedPrice: 3500,
            duration: "3 hours 30 mins",
          },
        ],
      },
      {
        id: "home-service-category",
        category: "Home Service",
        services: [
          {
            id: "home-service",
            name: "Home Service",
            priceFrom: 2000,
            priceTo: 15000,
          },
        ],
      },
    ],
    []
  );

  React.useEffect(() => {
    if (services) {
      handleSelectedCategory(services[0]);
    }
  }, [services]);

  const handleSelectedCategory = (category: CategoryT) => {
    setSelectedCategory(
      category.id === selectedCategory?.id ? undefined : category
    );
  };

  return (
    <>
      <MetaTags title="Prices" url="https://evianbliss.com/prices" />

      <div className="prices">
        <div className="container mb-2">
          <Breadcrum
            links={[
              { title: "Home", url: "/", currentPage: false },
              { title: "Prices", currentPage: true },
            ]}
          />

          <h1>Prices</h1>
        </div>

        <section className="container">
          <div className="row prices-row">
            <div className="col-8">
              <div className="accordion col-12">
                <ul className="accordion__list">
                  {services.map((item) => (
                    <li
                      key={item.id}
                      className={cx({
                        accordion__item: true,
                        "accordion__item--open":
                          selectedCategory?.id === item.id,
                      })}
                    >
                      <a onClick={() => handleSelectedCategory(item)}>
                        <span>{item.category}</span>
                        <span
                          className={cx({
                            icon: true,
                            lni: true,
                            "lni-chevron-down":
                              selectedCategory?.id !== item.id,
                            "lni-chevron-up": selectedCategory?.id === item.id,
                          })}
                        />
                      </a>

                      <ul className="accordion__content">
                        {item.services.map((service) => (
                          <li
                            key={service.id}
                            className={cx({
                              "accordion__content-item": true,
                              row: true,
                            })}
                          >
                            <p className="name col-4">{service.name}</p>
                            <p className="duration col-4">
                              {service.duration && `about ${service.duration}`}
                            </p>
                            <p className="bold price col-4 text-right">
                              {service.fixedPrice
                                ? formatMoney(service.fixedPrice.toString())
                                : service.priceFrom && service.priceTo
                                ? `${formatMoney(
                                    service.priceFrom.toString()
                                  )} – ${formatMoney(
                                    service.priceTo.toString()
                                  )}`
                                : ""}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-3">
              <Offer />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricesPage;
