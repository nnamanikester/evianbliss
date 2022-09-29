import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "../../../config";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Method = req.method;

  if (Method === "POST") {
  } else if (Method === "GET") {
    const REVIEW_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${config.GOOGLE_PLACE_ID}&fields=reviews&key=${config.GOOGLE_API_KEY}`;
    const result = await axios.get(REVIEW_URL);

    res.status(200).json(result.data.result.reviews);
  } else if (Method === "PATCH") {
  } else if (Method === "DELETE") {
  }
}
