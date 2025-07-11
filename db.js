//lets create a particular schema for our application 
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shreyasinghal5257:shreyasinghal2005@cluster21.i6yit.mongodb.net/new-year");
const myschema = mongoose.schema({
    title: string,
    description: string,
    completed: boolean,
}) 

const todo = mongoose.model('new-year', todoschema);

module.exports = ({
    todo
})