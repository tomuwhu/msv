import * as table from '$lib/server/db/schema';
import { db } from '$lib/server/db';

export async function getTodos(userId) {
    if (!userId) {
        return []
    }
    const result = await db.select().from(table.todos).orderBy(table.todos.todo)
    return result
}

export async function addTodo(userId, todo) {
    const result = await db.insert(table.todos).values({ userId, todo })
    return result
}