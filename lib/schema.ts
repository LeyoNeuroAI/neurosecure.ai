import { pgTable, serial, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core"

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  startupName: text("startup_name").notNull(),
  startupWebsite: text("startup_website").notNull(),
  country: varchar("country", { length: 2 }).notNull(),
  productivityIssue: text("productivity_issue").notNull(),
  priceWillingToPay: text("price_willing_to_pay").notNull(),
  consent: boolean("consent").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

