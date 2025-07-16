import { Request, Response } from "express";
import { getUsers, getUserById } from "./util";

export const index = (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my API" });
};

export const users = async (req: Request, res: Response) => {
  return res.status(200).json(await getUsers());
};

export const userById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const user = await getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: "User not found" });
  }
};
