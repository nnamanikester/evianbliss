import type { NextApiRequest, NextApiResponse } from "next";
import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../../../controllers";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Method = req.method;

  if (Method === "GET") {
    try {
      const categories = await getCategories();
      res.status(200).json(categories as any);
    } catch (e: any) {
      res.status(400).json(e);
    }
  }

  if (Method === "POST") {
    try {
      const category = await createCategory(req.body);
      res.status(200).json(category as any);
    } catch (e: any) {
      res.status(400).json(e);
    }
  }

  if (Method === "PATCH") {
  }

  if (Method === "DELETE") {
    try {
      const _category = req.query.category;
      const category = await deleteCategory(_category as string);
      res.status(200).json(category as any);
    } catch (e: any) {
      res.status(400).json(e);
    }
  }
}
