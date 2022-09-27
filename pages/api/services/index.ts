import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Method = req.method;

  if (Method === "POST") {
  } else if (Method === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else if (Method === "PATCH") {
  } else if (Method === "DELETE") {
  }
}
