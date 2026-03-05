import { Request, Response } from "express";
import { UserService } from "../services/auth.user.ts";
import jwt from "jsonwebtoken";
export class UserController {
  static async findAll(req: Request, res: Response) {
    try {

      var users = await UserService.findCandidati();
      res.json(users);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
  static async findBySector(req: Request, res: Response) {
    try {
      const { settore } = req.query; // Ottieni il settore dai parametri di query
      if (!settore) {
        return res.status(400).json({ error: "Il parametro 'settore' è richiesto" });
      }

      const users = await UserService.findBySector(settore as string);
      res.json(users);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
