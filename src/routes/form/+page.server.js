import * as todos from '$lib/server/todos';
import * as auth from '$lib/server/auth';
import { user } from '$lib/server/db/schema.js';

export const load = (event) => {
    if (!event.locals.user) {
        return {
            todolist: []
        }
    }
    return {
        user: event.locals.user,
        todolist: todos.getTodos(event.locals.user.id)
    }
}
export const actions = {
	default: async ({ locals, request }) => {
		//console.log(locals)
        const data = await request.formData()
		const x1 = data.get('x1')
        todos.addTodo(locals.user.id, x1)
	}
}