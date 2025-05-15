import { mysqlTable, int, varchar } from "drizzle-orm/mysql-core";

export const recipes = mysqlTable("recipes", {
	id: int("id").primaryKey().autoincrement(), // signed INT
	title: varchar("title", { length: 255 }).notNull(),
});

export const ingredients = mysqlTable("ingredients", {
	id: int("id").primaryKey().autoincrement(), // signed INT
	recipeId: int("recipe_id")
		.notNull()
		.references(() => recipes.id),
	name: varchar("name", { length: 255 }).notNull(),
});
