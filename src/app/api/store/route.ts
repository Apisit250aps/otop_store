import { auth } from "@/auth"
import dbConnect from "@/libs/database/mongoose"
import Store, { IStore } from "@/models/stores"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await dbConnect()
    const session = await auth()
    const user = session?.user
    const data = (await req.json()) as IStore
    const newStore = await Store.create({ ...data, userId: user?.id })

    return NextResponse.json({  }, { status: 201 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({}, { status: 500 })
  }
}
