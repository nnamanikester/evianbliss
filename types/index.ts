export interface AuthT {
  auth: {
    role: Array<"admin" | "manager" | "employee" | "user" | "customer">;
    /**
     * URL to be redirected to if user is not authorized to view the page
     */
    unauthorized: string;
  };
}

export interface SlotT {
  time: string;
  date: Date | string;
}

export interface ServiceT {
  id: string;
  name: string;
  slug: string;
  description: string;
  category_id: string;
  category: ServiceCategoryT;
  image: string;
  priceFrom: number;
  priceTo: number;
  fixedPrice: number;
  duration: string;
  status: "active" | "inactive";
  created_at: Date | string | number;
  updated_at: Date | string | number;
}

export interface ServiceCategoryT {
  id: string;
  name: string;
  services?: ServiceT[];
  status: "active" | "inactive" | null;
  created_at: Date | string | number;
  updated_at: Date | string | number;
}

export interface CustomerT {
  id?: string;
  fullname: string;
  email: string;
  phone: string;
  dob?: Date | string | null;
  appointments?: AppointmentT[];
  create_at?: Date | string;
  updated_at?: Date | string;
}

export interface AppointmentT {
  id?: string;
  service?: string;
  returning: boolean;
  customer_id: string;
  time: Date | string;
  status?: "pending" | "expired" | "done";
  created_at?: Date | string;
  updated_at?: Date | string;
}
