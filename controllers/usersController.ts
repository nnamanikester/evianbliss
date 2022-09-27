import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserByEmail = async (email: string) => {
  let user: any;

  try {
    const res = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    user = res;
  } catch (e) {
    console.log(e);
    user = null;
  }
  return user;
};
