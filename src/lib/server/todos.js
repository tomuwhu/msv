import * as table from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
export async function getTodos(userId) {
    if (!userId) {
        return []
    }
    const result = await db.select({todos: table.todos, uid: table.user.id, user: table.user.username})
        .from(table.todos)
        .leftJoin(table.user, eq(table.todos.userId, table.user.id))
        .orderBy(table.todos.todo)   
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