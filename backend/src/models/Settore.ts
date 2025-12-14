// models/user.js
import mongoose, { Document, Schema } from "mongoose";
export interface ISettore extends Document {
  nome: string;
}
const SettoreSchema = new Schema<ISettore>({
  nome: String,
});

export const Settore = mongoose.model<ISettore>("Settore", SettoreSchema);
