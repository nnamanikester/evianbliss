import Image from "next/future/image";
import * as React from "react";
import cx from "classnames";
import renderHTML from "react-render-html";

interface ServicesProps {}

interface ServiceT {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface CategoryT {
  id: string;
  category: string;
  services: Array<ServiceT>;
}

export const Services: React.FC<ServicesProps> = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryT>();
  const [selectedService, setSelectedService] = React.useState<ServiceT>();
  const [selectedServiceImage, setSelectedServiceImage] =
    React.useState<string>();

  const services: CategoryT[] = React.useMemo(
    () => [
      {
        id: "braids-category",
        category: "Braids",
        services: [
          {
            id: "ghana-baids-service",
            name: "Ghana Braids",
            description:
              "<p class='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "ghana-baids-service-2",
            name: "Ghana Braids 2",
            description:
              "<p class='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "ghana-baids-service-3",
            name: "Ghana Braids 3",
            description:
              "<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "ghana-baids-service-4",
            name: "Ghana Braids 4",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p>",
            image: "https://via.placeholder.com/500",
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
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "twist-service-2",
            name: "Natural Hair Twist 2",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "twist-service-3",
            name: "Natural Hair Twist 3",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
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
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "bridal-hair-service-1",
            name: "Igba Nkwu 1",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "bridal-hair-service-2",
            name: "Igba Nkwu 2",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "bridal-hair-service-3",
            name: "Igba Nkwu 3",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "bridal-hair-service-4",
            name: "Igba Nkwu 4",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
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
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
          {
            id: "gelup-service-2",
            name: "Natural Hair Gelup 2",
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
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
            description:
              "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, libero cupiditate aperiam vel quia suscipit officia aliquid laboriosam nesciunt, vitae hic alias, temporibus eligendi unde. Quo nobis magni cumque delectus?</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita perspiciatis iste nesciunt, eveniet debitis, aliquid ipsum enim quae ad blanditiis repudiandae commodi id dolores quaerat nobis vero architecto accusamus.</p>",
            image: "https://via.placeholder.com/500",
          },
        ],
      },
    ],
    []
  );

  React.useEffect(() => {
    if (services) {
      setSelectedCategory(services[0]);
      setSelectedService(services[0].services[0]);
      setSelectedServiceImage(services[0].services[0].image);
    }
  }, [services]);

  const handleSelectedService = (service: ServiceT) => {
    setSelectedService(service);
  };

  const handleSelectedCategory = (category: CategoryT) => {
    setSelectedCategory(
      category.id === selectedCategory?.id ? undefined : category
    );
    setSelectedService(category.services[0]);
  };

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="mb-3">
            <h2>
              Our Core Beauty
              <br />
              Center Services
            </h2>
          </div>

          <div className="row">
            <div className="accordion col-3 pr-4">
              <ul className="accordion__list">
                {services.map((item) => (
                  <li
                    key={item.id}
                    className={cx({
                      accordion__item: true,
                      "accordion__item--open": selectedCategory?.id === item.id,
                    })}
                  >
                    <a onClick={() => handleSelectedCategory(item)}>
                      <span>{item.category}</span>
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
                      {item.services.map((service) => (
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
              <h5>{selectedCategory?.category}</h5>
              <div className="row">
                <div className="col-8">
                  <h5 className="mb-2 bold text-dark">
                    {selectedService?.name}
                  </h5>
                  <p className="mb-2">
                    {renderHTML(selectedService?.description || "")}
                  </p>

                  <a href="#" className="btn btn__primary mt-2">
                    Book an appointment
                  </a>
                </div>
                <div className="col-4 service__image-container">
                  {selectedServiceImage && (
                    <Image
                      placeholder="blur"
                      blurDataURL="LEI|nO2k3Z^7-@#XS_KJ?]];5PEL"
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
