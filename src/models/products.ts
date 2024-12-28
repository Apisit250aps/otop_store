import { ObjectId, Schema, Document, model } from "mongoose"

export interface IProduct extends Document {
  _id: ObjectId
  storeId: ObjectId
  sku: string
  name: string
  description?: string
  price: number
  stock: number
  tags?: string[]
  categories?: string[]
}

const productSchema = new Schema<IProduct>(
  {
    storeId: { type: Schema.Types.ObjectId, required: true, ref: "stores" },
    sku: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    tags: [{ type: String }],
    categories: [{ type: String }]
  },
  { timestamps: true }
)

const Product = model<IProduct>("products", productSchema)
export default Product