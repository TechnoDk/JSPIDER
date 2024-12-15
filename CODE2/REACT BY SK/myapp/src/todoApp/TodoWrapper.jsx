import { useState } from "react";
import Createtodo from "./Createtodo";
import Alltodo  from "./Alltodo";
const TodoWrapper = () => {
    let [todo, setTodo] = useState("");
    let [allTodos, setAllTodos] = useState([{ text: "hello world",id:2 }]);
    let handleTodo = (e) => {
        setTodo(e.target.value);
    }

    let deleteTodo = (id) => {
        console.log("deleted", id);
        let filteredTodo = allTodos.filter((ele) => {
            return ele.id !== id;
            
        })
        setAllTodos(filteredTodo);
        
     };
    
    let editTodo = (id) => {
        console.log("edit", id);
        let editTodo = allTodos.find((ele) => {
            return ele.id === id;
            
        });
        console.log(editTodo);
        let filteredTodo = allTodos.filter((ele) => {
            return ele.id !== id;
            
        })
        setAllTodos(filteredTodo);
        
        setTodo(editTodo.text);
        
     };
    


    let createtodo = (e) => {
        e.preventDefault();
        console.log(todo);
        if (todo.trim() !=="") { // white space remove then use of Trim()
            let newTodo = {
            text: todo,
            id: Date.now(),
        };
            console.log(newTodo);
            setAllTodos([...allTodos, newTodo]);
            setTodo("")
       
        }
        else {
         alert("empty todo");
        }
        
        
    }
    console.log(allTodos);
    
    return (
        <div>
            {/* <h1>hello </h1> */}
            <Createtodo todo={todo} handleTodo={handleTodo} createtodo={createtodo} />
            <Alltodo allTodos={allTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
         </div>
        )
}
export default TodoWrapper; 