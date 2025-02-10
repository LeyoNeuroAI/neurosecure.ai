import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

// Use the `POSTGRES_URL` environment variable
const sql = neon(process.env.POSTGRES_URL!)
export const db = drizzle(sql)

