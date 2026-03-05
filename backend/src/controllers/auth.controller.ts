import { Request, Response } from "express";
import { AuthService } from "../services/auth.service.ts";
import jwt from "jsonwebtoken";
export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { cognome, nome, email, password, phone, role, settore } = req.body;
      const user = await AuthService.register(
        email,
        password,
        phone,
        nome,
        role,
        cognome,
        settore,
      );
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
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) throw new Error("No token");
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        email: string;
      };
      console.log("decoded: ", decoded);
      const data = await AuthService.Profile(decoded.email);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
