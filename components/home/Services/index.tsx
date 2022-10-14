import Image from "next/future/image";
import * as React from "react";
import cx from "classnames";
import renderHTML from "react-render-html";
import config from "../../../config";
import Link from "next/link";
import { useServiceCategoriesStore } from "../../../state";
import { ServiceCategoryT, ServiceT } from "../../../types";

interface ServicesProps {}

interface CategoryT {
  id: string;
  category: string;
  services: Array<ServiceT>;
}

export const Services: React.FC<ServicesProps> = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<ServiceCategoryT>();
  const [selectedService, setSelectedService] = React.useState<ServiceT>();
  const [selectedServiceImage, setSelectedServiceImage] =
    React.useState<string>();
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

  const handleSelectedService = (service: ServiceT) => {
    setSelectedService(service);
    if (service) {
      setSelectedServiceImage(service.image as string);
    }
  };

  const handleSelectedCategory = (category: ServiceCategoryT) => {
    setSelectedCategory(
      category.id === selectedCategory?.id ? undefined : category
    );
    if (category.services) {
      handleSelectedService(category.services[0]);
    }
  };

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="mb-3">
            <h2>
              Our Core Natural
              <br />
              Hair Services
            </h2>
          </div>

          <div className="row">
            <div className="accordion col-3 pr-4">
              <ul className="accordion__list">
                {categories.map((item) => (
                  <li
                    key={item.id}
                    className={cx({
                      accordion__item: true,
                      "accordion__item--open": selectedCategory?.id === item.id,
                    })}
                  >
                    <a onClick={() => handleSelectedCategory(item)}>
                      <span>{item.name}</span>
                      <span
                        className={cx({
                          icon: true,
                          lni: true,
                          "lni-chevron-down": selectedCategory?.id !== item.id,
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
                            "accordion__content-item--active":
                              selectedService?.id === service.id,
                          })}
                        >
                          <a onClick={() => handleSelectedService(service)}>
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-9 pl-4 service">
              <h5>{selectedCategory?.name}</h5>
              <div className="row">
                <div className="col-8">
                  <h5 className="mb-2 bold text-dark">
                    {selectedService?.name}
                  </h5>
                  <div className="mb-2">
                    {renderHTML(selectedService?.description || "")}
                  </div>

                  <Link href="/book-appointment">
                    <a className="btn btn__primary mt-2">Book an appointment</a>
                  </Link>
                </div>
                <div className="col-4 service__image-container">
                  {selectedServiceImage && (
                    <Image
                      key={selectedService?.id}
                      placeholder="blur"
                      blurDataURL={config.BLUR_URL}
                      alt="Evian Bliss Hair Spa Model"
                      src={selectedServiceImage}
                      width={500}
                      height={500}
                      className="service__image"
                      onError={() =>
                        setSelectedServiceImage(
                          "/images/error-loading-image.png"
                        )
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
