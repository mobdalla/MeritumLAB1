import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export class UserService {
  static async findCandidati() {
    const candidati = await User.find({ role: "candidato" });
    //return candidati;
return candidati.map(c => ({
  id: c.id,
  punteggio: c.score,
  highlighted: false
}));
  }
  static async findBySector(settore: string) {
    return User.find({ settore }); // Filtra gli utenti per settore
  }

  // other methods...
} // <-- make sure this closing brace exists and is in the right place
