import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { nome, cognome, email, password, phone  } = req.body;
      const user = await AuthService.register(email, password, phone, nome, cognome);
      res.json({ id: user._id, email: user.email });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await AuthService.login(email, password);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async profile(req: Request, res: Response) {
    res.json({ user: req.user });
  }
}
