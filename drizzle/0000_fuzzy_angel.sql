CREATE TABLE `ingredients` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`recipe_id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`amount` varchar(100),
	CONSTRAINT `ingredients_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `recipes` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`notes` text,
	`created` timestamp DEFAULT (now()),
	CONSTRAINT `recipes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `ingredients` ADD CONSTRAINT `ingredients_recipe_id_recipes_id_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE no action ON UPDATE no action;