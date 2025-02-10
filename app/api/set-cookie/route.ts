import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const cookieStore = await cookies()
    const { accept } = await request.json()

    cookieStore.set("cookie-consent", accept ? "true" : "false", {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
    })

    return NextResponse.json({ success: true })
}

