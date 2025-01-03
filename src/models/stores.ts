import { ObjectId, Schema, Document, model, models } from "mongoose"

export interface IStore extends Document {
  _id: ObjectId
  userId: ObjectId
  name: string
  provinces?: string
  district?: string
  tambol?: string
  postId?: string
  address?: string
  phone?: string
}

const storeSchema = new Schema<IStore>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    name: { type: String, required: true },
    provinces: { type: String },
    district: { type: String },
    tambol: { type: String },
    postId: { type: String },
    address: { type: String },
    phone: { type: String }
  },
  { timestamps: true }
)

const Store = models.stores || model<IStore>("stores", storeSchema);
export default Store