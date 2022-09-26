import * as React from "react";
import MetaTags from "../../components/MetaTags";
import QuickLinks from "../../components/QuickLinks";
import { AuthT } from "../../types";

interface ManagementPageProps {}

const ManagementPage: React.FC<ManagementPageProps> & AuthT = () => {
  return (
    <>
      <MetaTags title="Quick Links" url="https://evianbliss.com/management" />
      <QuickLinks show />
    </>
  );
};

ManagementPage.auth = {
  role: ["admin", "manager", "employee"],
  unauthorized: "/404",
};

export default ManagementPage;
