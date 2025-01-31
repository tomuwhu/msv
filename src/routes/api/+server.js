import * as table from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
    console.log(await request.json())
    return json({ animal: 'Cat', message: 'MEOW', method: 'POST' });
};

export const GET = async () => {
    const result = await db
        .select({text: table.todos.todo, author: table.user.username})
        .from(table.todos)
        .leftJoin(table.user, eq(table.todos.userId, table.user.id))
        .orderBy(table.todos.todo)   
    return json(result);
};