// zod inputes here in STEP 2

const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().nonempty(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}