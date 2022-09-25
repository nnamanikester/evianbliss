import * as React from "react";
import ManagementHeader from "../../../components/ManagementHeader";
import ServiceCategoryList from "../../../components/ServiceCategoryList";
import { AuthT } from "../../../types";

interface ManagementPageProps {}

const ManagementPage: React.FC<ManagementPageProps> & AuthT = () => {
  return (
    <>
      <div>
        <ManagementHeader title="Service Category" />

        <div className="service-categories pb-5">
          <div className="container mb-3">
            <form action="#">
              <div className="input-group col-6 mb-2">
                <label htmlFor="category-name">Category Name:</label>
                <input
                  placeholder="Enter category name"
                  type="text"
                  id="category-name"
                  className="input"
                />
              </div>

              <a href="#" className="btn btn__primary">
                Create Category
              </a>
            </form>
          </div>

          <ServiceCategoryList />
        </div>
      </div>
    </>
  );
};

ManagementPage.auth = {
  role: ["admin", "manager", "employee"],
  unauthorized: "/404",
};

export default ManagementPage;
