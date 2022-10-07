import { PrismaClient, Service } from "@prisma/client";
import { ServiceCategoryT } from "../types";

const prisma = new PrismaClient();

export const createCategory = async (
  data: Pick<ServiceCategoryT, "name">
): Promise<Partial<ServiceCategoryT>> => {
  try {
    const category = await prisma.category.create({
      data,
    });

    return category;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const getCategories = async (): Promise<any> => {
  try {
    const categories = await prisma.category.findMany({
      where: {
        status: "active",
      },
      include: {
        services: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return categories;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const deleteCategory = async (id: string): Promise<ServiceCategoryT> => {
  try {
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });

    return category;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
