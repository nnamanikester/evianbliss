import * as React from "react";
import { AuthT } from "../../types";

interface ManagementPageProps {}

const ManagementPage: React.FC<ManagementPageProps> & AuthT = () => {
  return (
    <>
      <div>Admin for staff</div>
    </>
  );
};

ManagementPage.auth = {
  role: ["admin", "manager", "employee"],
  unauthorized: "/404",
};

export default ManagementPage;
