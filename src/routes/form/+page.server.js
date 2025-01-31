import * as todos from '$lib/server/todos';

export const load = ({locals}) => {
    if (!locals?.user) {
        return {
            todolist: []
        }
    }
    return {
        user: locals.user,
        todolist: todos.getTodos(locals.user.id)
    }
}
export const actions = {
	new: async ({ locals, request }) => {
		/* console.log(locals) */
        const data = await request.formData()
		const x1 = data.get('x1')
        todos.addTodo(locals?.user?.id, x1)
	},
    delete: async ({ locals, request }) => {
        const data = await request.formData()
        const id = data.get('id')
        todos.deleteTodo(id)        
    },

    update: async ({ locals, request }) => {
        const data = await request.formData()
        const id = data.get('id')
        const v = data.get('v')
        todos.updateTodo(id, v)
    }

}