import axios from "axios";
import * as React from "react";
import toast from "react-hot-toast";
import ManagementHeader from "../../../components/ManagementHeader";
import ServiceList from "../../../components/ServiceList";
import { useServicesStore } from "../../../state";
import { AuthT } from "../../../types";

interface ManagementServicePageProps {}

const ManagementServicePage: React.FC<ManagementServicePageProps> &
  AuthT = () => {
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const createService = async () => {};

  return (
    <>
      <div>
        <ManagementHeader title="Service Category" />

        <div className="service-categories pb-5">
          <div className="container mb-3">
            <form action="#" onSubmit={createService}>
              <div className="row">
                <div className="input-group col-4 mb-2">
                  <label htmlFor="category-name">Select Category</label>
                  <input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Enter category name"
                    type="text"
                    id="category-name"
                    className="input"
                    required
                  />
                </div>
                <div className="input-group col-4 mb-2">
                  <label htmlFor="category-name">Select Category</label>
                  <input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Enter category name"
                    type="text"
                    id="category-name"
                    className="input"
                    required
                  />
                </div>
                <div className="input-group col-4 mb-2">
                  <label htmlFor="category-name">Select Category</label>
                  <input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Enter category name"
                    type="text"
                    id="category-name"
                    className="input"
                    required
                  />
                </div>
                <div className="input-group col-4 mb-2">
                  <label htmlFor="category-name">Select Category</label>
                  <input
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                    placeholder="Enter category name"
                    type="text"
                    id="category-name"
                    className="input"
                    required
                  />
                </div>
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className="btn btn__primary"
              >
                Create Service
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
