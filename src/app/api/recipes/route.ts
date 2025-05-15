import { NextRequest, NextResponse } from "next/server";
import { db, schema } from "@/db";

export async function GET() {
	const rows = await db.select().from(schema.recipes);
	return Response.json(rows);
}
