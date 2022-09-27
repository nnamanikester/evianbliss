import { PrismaClient } from "@prisma/client";
import { CustomerT } from "../types";

const prisma = new PrismaClient();

export const createCustomer = async (data: CustomerT) => {
  try {
    const customer = prisma.customer.create({ data });
    return customer;
  } catch (e: any) {
    new Error(e.message);
    console.log(e.message);
    return null;
  }
};

export const updateCustomer = async () => {};

export const getCustomers = async () => {};

/**
 *
 * @param args Specify a unique value to fetch the customer with `email`, `id`, or `phone`
 * @returns CustomerT
 */
export const getCustomer = async ({
  id,
  email,
  phone,
}: {
  email?: string;
  id?: string;
  phone?: string;
}) => {
  try {
    const customer = prisma.customer.findFirst({
      where: {
        id,
        email,
        phone,
      },
    });
    return customer;
  } catch (e: any) {
    new Error(e.message);
    console.log(e.message);
    return null;
  }
};

export const deleteCustomer = async (id: string) => {};
