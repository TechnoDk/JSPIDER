import { useState } from "react";
import style from "./createtodo.module.css";
const Createtodo = (prop) => {
    let { todo,handleTodo,createtodo } = prop;

     
    return (
        <div id={style.createtodo}>
            <form onSubmit={createtodo}>
                <h2>
                    Create Todo
                </h2>
                <input type="text"  placeholder="...todo" value={todo} onChange={handleTodo}/>
                <button>submit</button>
            </form>

             
         </div>
        )
}
export default Createtodo; 