import React, { useId, useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos, input])
        setInput("")
    }

    function handleDelete(todo){
       //console.log("clicked")
       let updatedTodos = todos.filter(item => item !== todo)
       setTodos(updatedTodos)
    }

    return (
        <div>
            <h2>To-Do List</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button>Add Todo</button>
            </form>
            <br />
            {todos && (
                todos.map((todo, ind) => {
                    return <div style={{marginBottom: "10px"}} key={ind}>{todo}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => handleDelete(todo)}>Delete</button></div>
                })
            )}
        </div>
    )
}

export default Todo