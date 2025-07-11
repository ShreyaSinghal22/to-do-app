const zod = require("zod");

const creatretodo = zod.object({
    title_todo: zod.string(),
    description_todo: zod.string()
})
 const updatetodo = zod.object({
    id: zod.string()
 })

 modules.export ={
    createtodo: createtodo,
    updatetodo: updatetodo 
 }