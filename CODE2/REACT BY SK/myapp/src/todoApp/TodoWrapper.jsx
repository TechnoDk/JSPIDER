import { useState } from "react";
import Createtodo from "./Createtodo";
import Alltodo  from "./Alltodo";
const TodoWrapper = () => {
    let [todo, setTodo] = useState("");

    let handleTodo = (e) => {
        setTodo(e.target.value);
    }
    let createtodo = (e) => {
        e.preventDefault();
        console.log(todo);
        let newTodo = {
            text: todo,
            id: Date.now(),
        };
        console.log(newTodo);
        
        
    }
    return (
        <div>
            {/* <h1>hello </h1> */}
            <Createtodo todo={todo} handleTodo={handleTodo} createtodo={createtodo} />
            <Alltodo/>
         </div>
        )
}
export default TodoWrapper; 