import mongoose, { Schema, Document } from "mongoose";

export interface IPhoto {
  url: string;
  filename: string;
  uploadedAt?: Date;
}

export interface ICollection extends Document {
  userId: string;
  name: string;
  description?: string;
  photos: IPhoto[];
  createdAt: Date;
  createdBy: string;
}

const PhotoSchema = new Schema<IPhoto>({
  url: { type: String, required: true },
  filename: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now }
});

const CollectionSchema = new Schema<ICollection>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  photos: { type: [PhotoSchema], default: [] },
  createdBy: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export const Collection = mongoose.model<ICollection>("Collection", CollectionSchema);
