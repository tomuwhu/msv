var x = 1
export const load = () => {
    return {
        cica: x
    }
}
export const actions = {
	default: async ({ locals, request }) => {
		console.log(locals)
        const data = await request.formData()
		const x1 = data.get('x1')
        console.log(x1)
        
	}
}