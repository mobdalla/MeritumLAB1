import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User, UserRole } from "../models/User"; // ✅ aggiunto UserRole

export class UserService {
  static async findCandidati(role: string) {
    const candidati = await User.find({ role: role as UserRole }); // ✅ cast a UserRole
    return candidati.map((c) => ({
      id: c.id,
      punteggio: c.score,
      highlighted: false,
    }));
  }

  static async findBySector(settore: string) {
    return User.find({ settore });
  }

  static async findCandidatiC() {
    const candidati = await User.find({ role: "candidato" as UserRole }); // ✅ cast a UserRole
    return candidati.map((c) => ({
      id: c.id,
      punteggio: c.score,
      highlighted: false,
    }));
  }

  static async updateRoleSettore(email: string, role: string, settore: string) {
    const user = await User.findOne({ email }); // ✅ FIX: UserModel → User
    if (!user) throw new Error("User not found");
    user.role = role as UserRole; // ✅ cast a UserRole
    user.settore = settore;
    await user.save();
    return user;
  }
}
