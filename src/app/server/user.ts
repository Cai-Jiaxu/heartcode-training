"use server"

import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users } from "../../db/schema";
import { db } from "../../db"

import * as schema from "./schema";


export async function insertOneUser(username:string) {
    await db.insert(users).values({name: username});
}
