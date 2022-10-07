import * as React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthT } from "../types";

interface AuthLayoutProps {
  children: React.ReactElement;
  auth: AuthT["aut h"];
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default AuthLayout;
