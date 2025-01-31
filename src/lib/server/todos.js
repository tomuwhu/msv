import * as table from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
export async function getTodos(userId) {
    if (!userId) {
        return []
    }
    const result = await db.select().from(table.todos).orderBy(table.todos.todo)
    return result
}

export async function addTodo(userId, todo) {
    const result = await db.insert(table.todos).values({ userId, todo, date:new Date() })
    return result
}

export async function deleteTodo(id) {
    const result = await db.delete(table.todos).where(eq(table.todos.id, id))
    return result
}

export async function updateTodo(id, todo) {
    const result = await db.update(table.todos).set({ todo }).where(eq(table.todos.id, id))
    return result
}