const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nishant:mac2022india@harkirat-test.d8opuzk.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}