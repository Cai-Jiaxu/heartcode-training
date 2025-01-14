"use server"

import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users } from "@/db/schema";


import * as schema from "@/db/schema";

const db = drizzle(sql, { schema });

export async function insertOneUser(name:string, isDrugDealer: boolean) {
    await db.insert(users).values({name: name, isDrugDealer: isDrugDealer});
}
