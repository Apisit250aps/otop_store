import { ObjectId, Schema, Document, model } from "mongoose"

export interface IInputData extends Document {
  _id: ObjectId
  storeId: ObjectId
  invoiceId: ObjectId
  productId: ObjectId
  quantity: number
  price: number
}

const inputDataSchema = new Schema<IInputData>(
  {
    storeId: { type: Schema.Types.ObjectId, required: true, ref: "stores" },
    invoiceId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "input_invoices"
    },
    productId: { type: Schema.Types.ObjectId, required: true, ref: "products" },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true
  }
)

const InputData = model<IInputData>("input_data", inputDataSchema)
export default InputData