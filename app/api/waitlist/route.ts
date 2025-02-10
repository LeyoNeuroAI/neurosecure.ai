import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { waitlist } from "@/lib/schema"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, startupName, startupWebsite, country, productivityIssue, priceWillingToPay, consent } = body

    // Validate required fields
    if (
      !name ||
      !email ||
      !startupName ||
      !startupWebsite ||
      !country ||
      !productivityIssue ||
      !priceWillingToPay ||
      !consent
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    await db.insert(waitlist).values({
      name,
      email,
      startupName,
      startupWebsite,
      country,
      productivityIssue,
      priceWillingToPay,
      consent,
    })

    return NextResponse.json({ message: "Successfully added to waitlist" }, { status: 200 })
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return NextResponse.json({ error: "Failed to add to waitlist" }, { status: 500 })
  }
}

