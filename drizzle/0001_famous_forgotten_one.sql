ALTER TABLE `ingredients` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `recipes` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `ingredients` DROP COLUMN `amount`;--> statement-breakpoint
ALTER TABLE `recipes` DROP COLUMN `notes`;--> statement-breakpoint
ALTER TABLE `recipes` DROP COLUMN `created`;