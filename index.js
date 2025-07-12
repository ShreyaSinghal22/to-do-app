const express = require("express");
const { createtodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
    const createpayload = req.body;
    const parsepayload = createtodo.safeParse(createpayload);
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        });
        return;
    }
        //put the todos in the database (can only do CRUD)
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })

})



app.get("/todos", async function(req,res) {
    const todos = await todo.find({});//db can be anywhere, might be faraway 
   //could be a promise if logged

    res.json({
        todos
    })
})

app.put("/completed",async function(req,res) {
    const updatepayload = req.body;
    const parsepayload = updatetodo.safeParse(updatepayload);
    if(!updatepayload.success) {
        res.status(411).json({
            msg: "you sent in the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id,
    },{
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})

app.listen(3000);