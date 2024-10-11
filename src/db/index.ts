// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from "@vercel/postgres";

// import * as schema from "./schema";

// export const db = drizzle(sql, ( schema ))

import { drizzle } from "drizzle-orm/connect";

async function main() {
    const db = await drizzle("vercel-postgres");
}

main()

