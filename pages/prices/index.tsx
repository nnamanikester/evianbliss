import type { NextPage } from "next";
import Breadcrum from "../../components/Breadcrum";
import MetaTags from "../../components/MetaTags";
import * as React from "react";
import cx from "classnames";
import Offer from "../../components/Offer";
import { formatMoney } from "../../utils";
import config from "../../config";
import { ServiceCategoryT } from "../../types";
import { useServiceCategoriesStore } from "../../state";

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
  const [selectedCategory, setSelectedCategory] =
    React.useState<ServiceCategoryT>();
  const [categories, setCategories] = React.useState<ServiceCategoryT[]>([]);

  const cats = useServiceCategoriesStore((state) => state.categories);

  React.useEffect(() => {
    const filtered = cats.filter(
      (cat) => cat.services && cat.services.length > 0
    );
    setCategories(filtered);
  }, [cats]);

  React.useEffect(() => {
    if (categories.length > 0) {
      handleSelectedCategory(categories[0]);
    }
  }, [categories]);

  const handleSelectedCategory = (category: ServiceCategoryT) => {
    setSelectedCategory(
      category.id === selectedCategory?.id ? undefined : category
    );
  };

  return (
    <>
      <MetaTags
        title="Prices"
        url="https://evianbliss.com/prices"
        description={`${config.APP_NAME} service pricing. We have the best services with affordable pricing. No hidden charges.`}
      />

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
                  {categories.map((item) => (
                    <li
                      key={item.id}
                      className={cx({
                        accordion__item: true,
                        "accordion__item--open":
                          selectedCategory?.id === item.id,
                      })}
                    >
                      <a onClick={() => handleSelectedCategory(item)}>
                        <span>{item.name}</span>
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
                        {item.services?.map((service) => (
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
