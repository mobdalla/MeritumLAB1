import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
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
static async completeProfile(req: Request, res: Response) {
  try {
    const { role, settore } = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(decoded)
    const user = await AuthService.updateRoleSettore(
      decoded.email,
      role,
      settore
    );

    res.json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}
  static async googleCallback(req: Request, res: Response) {
    try {
      const user: any = req.user;
      const email = user.email;
      const nome = user.name;
      const cognome = "";
      const phone = "";
      const role = "candidato";
      const settore = "";

      console.log(user.email)
      let dbUser = await AuthService.findByEmail(user.email);
      console.log(dbUser)
      if(!dbUser){
        const dbUser = await AuthService.register(
        email,
        "google-auth",
        phone,
        nome,
        role,
        cognome,
        settore,
      );
      }
const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "2h" },
    );
    res.redirect(`http://localhost:5173/oauth-success?token=${token}`);
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
      console.log("email", decoded.email)
      const data = await AuthService.Profile(decoded.email);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }
}
