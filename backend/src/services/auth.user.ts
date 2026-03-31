import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export class UserService {
  static async findCandidati(role: string) {
    const candidati = await User.find({ role: role });
    //return candidati;
    return candidati.map((c) => ({
      id: c.id,
      punteggio: c.score,
      highlighted: false,
    }));
  }
  static async findBySector(settore: string) {
    return User.find({ settore }); // Filtra gli utenti per settore
  }
  static async findCandidatiC() {
    const filter = { role: "candidato" };
    const candidati = await User.find(filter);

    //return candidati;
    return candidati.map((c) => ({
      id: c.id,
      punteggio: c.score,
      highlighted: false,
    }));
  }
static async updateRoleSettore(email: string, role: string, settore: string) {
  const user = await UserModel.findOne({ email });

  if (!user) throw new Error("User not found");

  user.role = role;
  user.settore = settore;

  await user.save();

  return user;
}
  // other methods...
} // <-- make sure this closing brace exists and is in the right place
