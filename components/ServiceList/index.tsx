import axios from "axios";
import moment from "moment";
import * as React from "react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { useServicesStore } from "../../state";
import { ServiceT } from "../../types";
import { fetcher, formatMoney } from "../../utils";
import Loading from "../Loading";

interface ServiceListProps {}

const ServiceList: React.FC<ServiceListProps> = () => {
  const services = useServicesStore((state) => state.services);
  const { data, error } = useSWR<ServiceT[]>("/api/services", fetcher);

  React.useEffect(() => {
    if (data) {
      toast.dismiss();
    }
    if (error) {
      toast.dismiss();
    }
    if (!data && !error) {
      toast.loading("Fetching Services...");
    }
  }, [data, error]);

  return (
    <>
      <div className="container table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services &&
              services.map((serv, i) => (
                <tr key={serv.id}>
                  <td>#{i + 1}</td>
                  <td>{serv.name}</td>
                  <td>{serv.category?.name}</td>
                  <td>{serv.duration}</td>
                  <td>
                    {serv.fixedPrice
                      ? formatMoney(serv.fixedPrice.toString())
                      : serv.priceFrom
                      ? `${formatMoney(
                          serv.priceFrom.toString()
                        )} - ${formatMoney(serv.priceTo.toString())}`
                      : ""}
                  </td>
                  <td>{serv.status}</td>
                  <td>{moment(serv.created_at).format("DD/MM/YYYY")}</td>
                  <td>
                    <a onClick={() => {}}>
                      <span className="icon lni lni-trash-can text-primary" />
                    </a>
                  </td>
                </tr>
              ))}
            {error && (
              <span className="text-danger text-center">{error.message}</span>
            )}
          </tbody>
        </table>
        <div className="pagination mt-3">
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
        </div>
      </div>
    </>
  );
};

export default ServiceList;
