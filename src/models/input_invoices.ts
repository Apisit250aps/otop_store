import { ObjectId, Schema, Document, model } from "mongoose"

export interface IInputInvoice extends Document {
  _id: ObjectId
  storeId: ObjectId
  invoiceNo: string
  type?: "new" | "add"
  remark?: string
  generateInvoiceNo(): Promise<string>
}

const inputInvoiceSchema = new Schema<IInputInvoice>(
  {
    invoiceNo: { type: String, required: false, unique: true },
    storeId: { type: Schema.Types.ObjectId, required: true, ref: "stores" },
    type: { type: String, required: false, default: "new" },
    remark: { type: String, required: false}
  },
  { timestamps: true }
)

inputInvoiceSchema.methods.generateInvoiceNo =
  async function (): Promise<string> {
    const today = new Date()
    const year = today.getFullYear().toString().slice(-2) // ปี (2 หลัก)
    const month = (today.getMonth() + 1).toString().padStart(2, "0") // เดือน
    const day = today.getDate().toString().padStart(2, "0") // วัน

    // ดึง invoice ของวันนั้นมา
    const invoicesToday = await (this.constructor as any).find({
      createdAt: {
        $gte: new Date(`${today.getFullYear()}-${month}-${day}T00:00:00.000Z`),
        $lt: new Date(`${today.getFullYear()}-${month}-${day}T23:59:59.999Z`)
      }
    })

    // กำหนดลำดับของใบแจ้งหนี้ในวันนั้น
    const sequence = (invoicesToday.length + 1).toString().padStart(4, "0") // ลำดับ 4 หลัก

    // รูปแบบ invoice no: YYMMDD#### (ปี, เดือน, วัน, ลำดับ)
    return `${year}${month}${day}${sequence}`
  }

inputInvoiceSchema.pre<IInputInvoice>("save", async function (next) {
  if (!this.invoiceNo) {
    this.invoiceNo = await this.generateInvoiceNo()
  }
  next()
})

const InputInvoice = model<IInputInvoice>("input_invoices", inputInvoiceSchema)
export default InputInvoice
