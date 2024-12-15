import { useState } from "react";
import style from "./alltodos.module.css";
const Alltodo = (prop) => {
    console.log(prop);//{allTodos:[{},{},{}]}
    let { allTodos, deleteTodo,editTodo } = prop;
     
   

    return (
        <div id={style.todoswrapper}>
            {
                allTodos.map((ele) => {
                    console.log(ele);
                    let { text, id } = ele;
                    return (
                        <section key={id}>
                            <h1>{text}</h1> 
                            <button onClick={()=>editTodo(id)} >Edit</button>
                            <button className={style.del} onClick={()=>deleteTodo(id)}>Delete</button>
                            
                        </section>
                    )
                    
                })
             }
         </div>
        )
}
export default Alltodo; 