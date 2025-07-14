export function Createtodo(props) {
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding:10,
            margin: 10
        }}type = "text" placeholder = "title" onchange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br />
        <input id="desc" style={{
            padding:10,
            margin:10
        }}type = "text" placeholder = "description" onchange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br />

        <button style={{
            padding: 10,
            margin: 10
        }}onclick = {()=>{
            fetch("http://localhost:3000/todo", { //axios make it more easier to do
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
            
                }),
                headers: {
                    "content-Type": "application/json"
                }
            })
                .then(async function(res) {
                    const JSON = await res.json();
                    alert("todo added");
                })
                props.setTodos([...todos, {
                    title: title,
                    description: description,
                }])
        }}>Add a todo</button>
    </div>
}