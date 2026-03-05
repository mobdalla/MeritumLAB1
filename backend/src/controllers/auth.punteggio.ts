import { Request, Response } from "express";
import { UserPunteggio } from "../services/user.punteggio";
import jwt from "jsonwebtoken";
export class UserPunteggio {
  static async Update(req: Request, res: Response) {
    try {
      const { id, score } = req.body;
      const user = await UserPunteggio.updateScore(id, score);
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
