export interface AuthT {
  auth: {
    role: Array<"admin" | "manager" | "employee" | "user" | "customer">;
    /**
     * URL to be redirected to if user is not authorized to view the page
     */
    unauthorized: string;
  };
}
