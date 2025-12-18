import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export class AuthService {
  static async register(email: string, password: string, phone: number, nome: string, congnome: string) {
    const exists = await User.findOne({ email });
    if (exists) throw new Error("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ email, password: hashed, phone, nome, congnome });
    return user;
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email or password");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid email or password");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "2h" },
    );

    return { token };
  }
}
