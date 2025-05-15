import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema"; // import every table

/* create a connection pool from env vars */
const pool = mysql.createPool({
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
});

/* create the Drizzle instance & bind schema */
export const db = drizzle(pool, { schema, mode: "default" });

/* re-export tables so callers can do `import { recipes } from '@/db'` */
export { schema };
