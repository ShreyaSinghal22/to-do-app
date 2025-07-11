const express = require("express");
const { createtodo } = require("./types");

const app = express();

app.use(express.json());

app.post("/todo", function(req,res) {
    const createpayload = req.body;
    const parsepayload = createtodo.safeParse(createpayload);
    if (!parsepayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs",
        })
        return;
    }
})

app.get("/todos", function(req,res) {

})

app.put("/completed", function(req,res) {
    const updatepayload = req.body;
    const parsepayload = updatetodo.safeParse(updatepayload);
    if(!updatepayload.success) {
        res.status(411).json({
            msg: "you sent in the wrong inputs",
        })
        return;
    }
})