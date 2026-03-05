import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export class UserPunteggio {
  static async updateScore(id: string, score: number) {
    const filter = { _id: id };
    const update = { score: score };
    const user = await User.findOneAndUpdate(filter, update);
    return { user };
  }
}
