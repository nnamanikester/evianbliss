import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import { AppointmentT } from "../types";

const prisma = new PrismaClient();

export const createAppointment = async (data: AppointmentT) => {
  try {
    const appointment = prisma.appointment.create({ data });
    return appointment;
  } catch (e: any) {
    new Error(e.message);
    console.log(e.message);
    return null;
  }
};

export const updateAppointment = async () => {};

export const getAppointment = async () => {};

export const getAppointments = async ({
  time,
  customer_id,
  id,
  status,
}: Partial<AppointmentT>) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        time: time && {
          gte: dayjs(new Date(time as Date)).toISOString(),
          lt: dayjs(new Date(time as Date))
            .add(1, "day")
            .toISOString(),
        },
        customer_id,
        id,
        status,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return appointments;
  } catch (e: any) {
    new Error(e.message);
    console.log(e.message);
    return [];
  }
};

export const deleteAppointment = async (id: string) => {};
