// import express and middleware 
// step 2 : zod user validation
// step 3 : create a post,, get and put route for creating a todo
// step 4 : create a mongodb connection


const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const app = express()

app.use(express.json())


app.post('/todo',async function(req, res) {
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if (!parsePayLoad.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
    } else {
        return;
    }
    // step 4 : create a mongodb connection
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
})

app.get('/todos',async function(req, res) {
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed',async function(req, res) {
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if (parsePayLoad.success) {
        return;
    } else {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})

app.listen(3000);