import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, UserRole } from "../models/User";

export class AuthService {
  static async register(
    email: string,
    password: string,
    phone: string, // ✅ cambiato da number a string (coerente con il controller)
    nome: string,
    role: string,
    cognome: string,
    settore: string,
  ) {
    const exists = await User.findOne({ email });
    if (exists) throw new Error("User already exists");
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashed,
      phone,
      nome,
      role,
      cognome,
      settore,
    });
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

  static async Profile(email: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email");
    return { user };
  }

  static async findByEmail(email: string) {
    const user = await User.findOne({ email });
    // ✅ rimosso il throw: restituisce null se non trovato (usato nel googleCallback)
    return user ?? null;
  }

  static async updateRoleSettore(email: string, role: string, settore: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    user.role = role as UserRole; // ✅ FIX riga 62: cast esplicito a UserRole
    user.settore = settore;
    await user.save();
    return user;
  }
}
