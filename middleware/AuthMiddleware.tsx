import { useSession } from "next-auth/react";
import Router from "next/router";
import * as React from "react";
import ScreenLoading from "../components/ScreenLoading";
import { AuthT } from "../types";

type AuthMiddlewareProps = {
  children: any;
  auth: AuthT["auth"];
};

export const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({
  children,
  auth,
}) => {
  const { status, data } = useSession({ required: true });
  const [role, setRole] = React.useState<
    "admin" | "user" | "customer" | "manager" | "employee"
  >();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (data?.user) {
      getUserRole(data.user?.email as string);
    }
  }, [data]);

  const getUserRole = async (email: string) => {
    try {
      const res = await fetch(`/api/users/by-email?email=${email}`);
      const user = await res.json();
      setRole(user.role);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  if (status === "loading" || isLoading) {
    return <ScreenLoading />;
  }

  if (role && auth.role.includes(role)) {
    return children;
  } else {
    Router.replace(auth.unauthorized);
    return null;
  }
};

export default AuthMiddleware;
