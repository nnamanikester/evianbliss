import type { NextApiRequest, NextApiResponse } from "next";
import {
  createAppointment,
  createCustomer,
  getAppointments,
  getCustomer,
} from "../../../controllers";
import { CustomerT } from "../../../types";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Method = req.method;

  if (Method === "POST") {
    // Create appointment
    const { fullname, phone, email, service, time, returning } = req.body;
    try {
      let customer: CustomerT | null = null;
      customer = await getCustomer({ email });
      if (!customer) {
        customer = await createCustomer({
          fullname,
          phone,
          email,
        });
      }
      if (customer) {
        const appointment = await createAppointment({
          customer_id: customer.id as string,
          service,
          time,
          returning,
        });

        res.status(200).json(appointment as any);
      }
    } catch (e: any) {
      res.status(400).json(e.message);
    }
  } else if (Method === "GET") {
    const { time, id, customer_id, status } = req.query as any;
    try {
      const appointments = await getAppointments({
        time,
        id,
        customer_id,
        status,
      });
      res.status(200).json(appointments as any);
    } catch (e: any) {
      res.status(400).json(e.message);
    }
  } else if (Method === "PATCH") {
  } else if (Method === "DELETE") {
  }
}
