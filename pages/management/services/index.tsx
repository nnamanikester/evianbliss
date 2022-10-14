import axios from "axios";
import * as React from "react";
import toast from "react-hot-toast";
import ManagementHeader from "../../../components/ManagementHeader";
import ServiceList from "../../../components/ServiceList";
import { useServiceCategoriesStore, useServicesStore } from "../../../state";
import { AuthT, ServiceCategoryT, ServiceCreateInputT } from "../../../types";
import cx from "classnames";
import slugify from "slugify";
import { imgurService } from "../../../services";
import Loading from "../../../components/Loading";
import config from "../../../config";
import Image from "next/future/image";

interface ManagementServicePageProps {}

const ManagementServicePage: React.FC<ManagementServicePageProps> &
  AuthT = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [priceFrom, setPriceFrom] = React.useState("");
  const [priceTo, setPriceTo] = React.useState("");
  const [fixedPrice, setFixedPrice] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const [isCategoryListOpen, setIsCategoryListOpen] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState("");
  const [services, setCategories] = React.useState<ServiceCategoryT[]>([]);
  const [selectedCategory, setSelectedCategory] =
    React.useState<ServiceCategoryT>();
  const [isFixed, setIsFixed] = React.useState(false);

  const fetchedCategories = useServiceCategoriesStore(
    (state) => state.categories
  );

  const fetchedServices = useServicesStore((state) => state.services);

  const addService = useServicesStore((state) => state.addServices);

  const setServices = useServicesStore((state) => state.setServices);

  React.useEffect(() => {
    if (fetchedCategories) {
      setCategories(fetchedCategories);
    }
  }, [fetchedCategories]);

  React.useEffect(() => {
    if (fetchedCategories) {
      const newServices = fetchedCategories.filter((serv) =>
        serv.name.toLowerCase().includes(categoryName.toLowerCase())
      );
      setCategories(newServices);
    }
  }, [categoryName, fetchedCategories]);

  const validateInput = () => {
    if (!selectedCategory?.id) return "Please select a service category";
    if (!name) return "Please enter the service name";
    if (!duration) return "Please enter a service duration";
    if (isFixed) {
      if (!fixedPrice) return "Please enter a fixed price";
    } else {
      if (!priceFrom) return "Please enter a minimum price";
      if (!priceTo) return "Please enter a maximum price";
    }
    if (!description || description.length < 30)
      return "Please write enough descripiton about this service";
    // if (!image) return "Please upload a service image";

    return true;
  };

  const resetForm = () => {
    setName("");
    setCategoryName("");
    setSelectedCategory(undefined);
    setDescription("");
    setImage("");
    setPriceFrom("");
    setPriceTo("");
    setFixedPrice("");
    setDuration("");
  };

  const createService = async (e: any) => {
    e.preventDefault();
    if (typeof validateInput() === "string") {
      return toast.error(validateInput() as string);
    }
    const data: ServiceCreateInputT = {
      name,
      slug: slugify(name.toLowerCase()),
      category_id: selectedCategory?.id as string,
      description,
      image,
      priceFrom: parseInt(priceFrom),
      priceTo: parseInt(priceTo),
      fixedPrice: parseInt(fixedPrice),
      duration,
    };

    try {
      setIsLoading(true);
      const res = await axios.post("/api/services", data);
      addService(res.data);
      resetForm();
      setIsLoading(false);
    } catch (e: any) {
      setIsLoading(false);
      console.log(e.response?.data || e.message);
    }
  };

  return (
    <>
      <div>
        <ManagementHeader title="Services" />

        <div className="service-categories pb-5">
          <div className="container mb-3">
            <form action="#" onSubmit={createService}>
              <div className="row mb-2">
                <div className="input-group col-4">
                  <label htmlFor="email">Choose Category *</label>
                  <input
                    placeholder="Choose a category"
                    type="text"
                    name="category"
                    className="input input-select"
                    required
                    onFocus={() => setIsCategoryListOpen(true)}
                    value={categoryName || selectedCategory?.name || ""}
                    onChange={({ target }) => {
                      setCategoryName(target.value);
                      setSelectedCategory(undefined);
                    }}
                  />
                  {services.length > 0 && (
                    <div
                      className={cx({
                        "select-list": true,
                        "select-list--open": isCategoryListOpen,
                      })}
                    >
                      <ul>
                        {services.map((serv) => (
                          <li
                            onClick={() => {
                              setSelectedCategory(serv);
                              setIsCategoryListOpen(false);
                              setCategoryName("");
                            }}
                            key={serv.id}
                          >
                            {serv.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="input-group col-4 mb-2">
                  <label htmlFor="service-name">Service Name *</label>
                  <input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Enter service name"
                    type="text"
                    id="service-name"
                    className="input"
                    required
                  />
                </div>
                <div className="input-group col-4 mb-2">
                  <label htmlFor="service-duration">Service Duration *</label>
                  <input
                    value={duration}
                    onChange={({ target }) => setDuration(target.value)}
                    placeholder="Enter duration eg: 3 hrs 30 mins"
                    type="text"
                    id="service-duration"
                    className="input"
                    required
                  />
                </div>
                <div className="input-group col-4 mb-2 pt-3">
                  <label htmlFor="price-type" className="mr-1">
                    Price Range
                  </label>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="price-type"
                      checked={isFixed}
                      onChange={() => {
                        setIsFixed((prev) => !prev);
                        setFixedPrice("");
                        setPriceFrom("");
                        setPriceTo("");
                      }}
                    />
                    <span className="slider round"></span>
                  </label>
                  <label htmlFor="price-type" className="ml-1">
                    Fixed Price
                  </label>
                </div>
                {!isFixed ? (
                  <>
                    <div className="input-group col-4 mb-2">
                      <label htmlFor="price-from">Min. Price *</label>
                      <input
                        value={priceFrom}
                        onChange={({ target }) => setPriceFrom(target.value)}
                        placeholder="Enter minimum price"
                        type="number"
                        id="price-from"
                        className="input"
                        required
                      />
                    </div>
                    <div className="input-group col-4 mb-2">
                      <label htmlFor="price-to">Max. Price *</label>
                      <input
                        value={priceTo}
                        onChange={({ target }) => setPriceTo(target.value)}
                        placeholder="Enter maximum price"
                        type="number"
                        id="price-to"
                        className="input"
                        required
                      />
                    </div>
                  </>
                ) : (
                  <div className="input-group col-4 mb-2">
                    <label htmlFor="fixed-price">Fixed Price *</label>
                    <input
                      value={fixedPrice}
                      onChange={({ target }) => setFixedPrice(target.value)}
                      placeholder="Enter fixed price"
                      type="number"
                      id="fixed-price"
                      className="input"
                      required
                    />
                  </div>
                )}

                <div className="input-group col-6 mb-2">
                  <label htmlFor="description">Service Description</label>
                  <textarea
                    placeholder="Enter service description"
                    id="description"
                    cols={30}
                    onChange={({ target }) => setDescription(target.value)}
                    rows={10}
                    className="input"
                    value={description}
                    required
                  ></textarea>
                </div>

                <div className="input-group col-4 mb-2">
                  <label htmlFor="image">Image *</label>
                  <input
                    onChange={({ target }) => setImage(target.value)}
                    type="url"
                    id="image"
                    className="input"
                    placeholder="Enter image url"
                    required
                  />
                  {image && (
                    <Image
                      alt={name}
                      src={image}
                      width={100}
                      height={100}
                      className="input-group__image"
                    />
                  )}
                </div>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="btn btn__primary"
              >
                {isLoading ? <Loading size="small" /> : "Create Service"}
              </button>
            </form>
          </div>

          <ServiceList />
        </div>
      </div>
    </>
  );
};

ManagementServicePage.auth = {
  role: ["admin", "manager", "employee"],
  unauthorized: "/404",
};

export default ManagementServicePage;
