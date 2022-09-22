import * as React from "react";
import { AuthT } from "../../types";

interface DashboardPageProps {}

const DashboardPage: React.FC<DashboardPageProps> & AuthT = () => {
  return (
    <>
      <div>The Dashboard of user</div>
    </>
  );
};

DashboardPage.auth = {
  role: ["customer", "user"],
  unauthorized: "/403",
};

export default DashboardPage;
