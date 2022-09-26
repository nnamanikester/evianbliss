import axios from "axios";
import moment from "moment";
import * as React from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { useServiceCategoriesStore } from "../../state";
import { ServiceCategoryT } from "../../types";
import { fetcher } from "../../utils";
import Loading from "../Loading";

interface ServiceCategoryListProps {}

const ServiceCategoryList: React.FC<ServiceCategoryListProps> = () => {
  const removeCategory = useServiceCategoriesStore(
    (state) => state.removeCategory
  );
  const { data, error } = useSWR<ServiceCategoryT[]>(
    "/api/categories",
    fetcher
  );
  const setCategories = useServiceCategoriesStore(
    (state) => state.setCategories
  );
  const categories = useServiceCategoriesStore((state) => state.categories);

  React.useEffect(() => {
    if (data) {
      setCategories(data);
      toast.dismiss();
    }
    if (error) {
      toast.dismiss();
    }
    if (!data && !error) {
      toast.loading("Fetching Service Categories...");
    }
  }, [data, error]);

  const handleDeleteCategory = async (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        toast.loading("Deleting category...");
        await axios.delete(`/api/categories?category=${id}`);
        toast.dismiss();
        toast.success("Category deleted successfully!");
        removeCategory(id);
      } catch (e: any) {
        toast.dismiss();
        toast.error("An error occured while trying to delete category.");
      }
    }
  };

  return (
    <>
      <div className="container table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories ? (
              categories.map((cat, i) => (
                <tr key={cat.id}>
                  <td>#{i + 1}</td>
                  <td>{cat.name}</td>
                  <td>{cat.status}</td>
                  <td>{moment(cat.created_at).format("DD/MM/YYYY")}</td>
                  <td>
                    <a onClick={() => handleDeleteCategory(cat.id)}>
                      <span className="icon lni lni-trash-can text-primary" />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <Loading size="medium" />
              </tr>
            )}
            {error && <span className="text-danger">{error.message}</span>}
          </tbody>
        </table>
        {/* <div className="pagination mt-3">
          <ul>
            <li>
              <span className="icon ion-ios-arrow-back" />
            </li>
            <li>1</li>
            <li>2</li>
            <li className="active">3</li>
            <li className="hidden-nav">...</li>
            <li>9</li>
            <li>10</li>
            <li className="inactive">
              <span className="icon ion-ios-arrow-forward" />
            </li>
          </ul>
          <p className="pr-4 mt-1">10 of 200 entries</p>
        </div> */}
      </div>
    </>
  );
};

export default ServiceCategoryList;
