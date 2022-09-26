import axios from "axios";
import * as React from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import Loading from "../../../components/Loading";
import ManagementHeader from "../../../components/ManagementHeader";
import ServiceCategoryList from "../../../components/ServiceCategoryList";
import { useServiceCategoriesStore } from "../../../state";
import { AuthT } from "../../../types";

interface ManagementPageProps {}

const ManagementPage: React.FC<ManagementPageProps> & AuthT = () => {
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const addCategory = useServiceCategoriesStore((state) => state.addCategory);

  const createCategory = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      toast.loading("Creating category...");
      const res = await axios.post("/api/categories", { name });
      addCategory(res.data);
      setIsLoading(false);
      toast.dismiss();
      toast.success("Category created successfully!");
      setName("");
    } catch (e: any) {
      toast.dismiss();
      toast.error("An error occured while creating category.");
      setIsLoading(false);
      console.log(e.response.data);
    }
  };

  return (
    <>
      <div>
        <ManagementHeader title="Service Category" />

        <div className="service-categories pb-5">
          <div className="container mb-3">
            <form action="#" onSubmit={createCategory}>
              <div className="input-group col-6 mb-2">
                <label htmlFor="category-name">Category Name:</label>
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

              <button
                disabled={isLoading}
                type="submit"
                className="btn btn__primary"
              >
                Create Category
              </button>
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
