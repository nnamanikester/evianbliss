import type { NextApiRequest, NextApiResponse } from "next";
import { createService, getServices } from "../../../controllers";

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Method = req.method;

  if (Method === "POST") {
    try {
      const service = await createService(req.body);
      res.status(200).json(service);
    } catch (e: any) {
      console.log(e.response?.date || e.message);
      res.status(400).json(e.message);
    }
  } else if (Method === "GET") {
    try {
      const services = await getServices();
      res.status(200).json(services);
    } catch (e: any) {
      res.status(400).json(e.message);
      console.log(e.response?.data || e.message);
    }
  } else if (Method === "PATCH") {
  } else if (Method === "DELETE") {
  }
}
