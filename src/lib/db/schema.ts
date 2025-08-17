import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const profileTable = pgTable('profile', {
	id: uuid('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email').notNull(),
});

// create a drizzle schema for an orders page
// export const orderTable = pgTable('order', {
// 	id: uuid('id').primaryKey(),
// 	profileId: uuid('profile_id').notNull().references(() => profileTable.id),
// 	productId: uuid('product_id').notNull(),
// 	quantity: text('quantity').notNull(),
// 	status: text('status').notNull(),
// 	createdAt: text('created_at').notNull(), // adding created_at field
// 	updatedAt: text('updated_at').notNull(), // adding updated_at field
// });