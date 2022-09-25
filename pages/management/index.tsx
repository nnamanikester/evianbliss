import * as React from "react";
import QuickLinks from "../../components/QuickLinks";
import { AuthT } from "../../types";

interface ManagementPageProps {}

const ManagementPage: React.FC<ManagementPageProps> & AuthT = () => {
  return (
    <>
      <QuickLinks />
    </>
  );
};

ManagementPage.auth = {
  role: ["admin", "manager", "employee"],
  unauthorized: "/404",
};

export default ManagementPage;
