import type { NextApiRequest, NextApiResponse } from "next";
import { getUserByEmail } from "../../../controllers";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Method = req.method;

  if (Method === "POST") {
  } else if (Method === "GET") {
    const user = await getUserByEmail(req.query.email as string);
    return res.status(200).json(user);
  } else if (Method === "PATCH") {
  } else if (Method === "DELETE") {
  }
}
