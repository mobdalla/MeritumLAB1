import { Request, Response } from "express";
import { UserPuntoService } from "../services/user.punteggio"; // ✅ rinominato l'import
import jwt from "jsonwebtoken";

export class UserPuntoController { // ✅ rinominata la classe locale
  static async Update(req: Request, res: Response) {
    try {
      const { id, score, role } = req.body;
      const user = await UserPuntoService.updateScore(id, score, role); // ✅ usa il service importato
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
