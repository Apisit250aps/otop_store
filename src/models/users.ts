import { ObjectId, Schema, Document, model } from "mongoose"
import bcrypt from "bcrypt"

export interface IUser extends Document {
  _id: ObjectId
  name: string
  email: string
  password: string
  authentication(password: string): Promise<boolean>
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

userSchema.pre("save", async function (next) {
  const user = this
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

userSchema.methods.authentication = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password)
}

const User = model<IUser>("users", userSchema)

export default User
