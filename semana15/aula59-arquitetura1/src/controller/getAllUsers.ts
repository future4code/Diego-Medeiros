import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";

export const getAllUsers = async (req: Request, res: Response) => {
  const userBusiness = new UserBusiness();

  try {
    const token = req.headers.authorization!;
    const users = await userBusiness.getAllUsers(token);

    res.send(users).status(200);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
  await BaseDatabase.destroyConnection();
};
