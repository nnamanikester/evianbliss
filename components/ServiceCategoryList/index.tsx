import * as React from "react";

interface ServiceCategoryListProps {}

const ServiceCategoryList: React.FC<ServiceCategoryListProps> = () => {
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
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
            <tr>
              <td>#123</td>
              <td>Bantu Knots</td>
              <td>Active</td>
              <td>13/09/2022</td>
              <td>
                <a href="#">
                  <span className="icon lni lni-trash-can text-primary" />
                </a>
              </td>
            </tr>
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

export default ServiceCategoryList;
