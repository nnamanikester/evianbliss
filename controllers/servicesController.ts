import { PrismaClient, Service } from "@prisma/client";
import { ServiceCategoryT, ServiceCreateInputT, ServiceT } from "../types";

const prisma = new PrismaClient();

export const createService = async (data: ServiceCreateInputT) => {
  try {
    const service = await prisma.service.create({
      data,
    });

    return service;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const getServices = async (): Promise<ServiceT[]> => {
  try {
    const services = await prisma.service.findMany({
      where: {
        status: "active",
      },
      include: { category: true },
      orderBy: {
        created_at: "desc",
      },
    });

    return services;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const getService = async ({
  slug,
  id,
}: {
  slug?: string;
  id?: string;
}): Promise<Partial<ServiceT | null>> => {
  try {
    const service = await prisma.service.findUnique({
      where: {
        slug,
        id,
      },
    });

    return service;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};

export const deleteService = async (id: string) => {
  try {
    const service = await prisma.service.delete({
      where: {
        id,
      },
    });

    return service;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.message);
  }
};
