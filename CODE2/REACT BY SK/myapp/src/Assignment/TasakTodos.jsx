import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import style from "./taskTodos.module.css";

const TasakTodos = () => {
    let [user, setUser] = useState(null);
    useEffect(() => {
        async function fetchTodos() {
            let response = await fetch("https://jsonplaceholder.typicode.com/todos");
            let todos = await response.json();
            setUser(todos);
        
        }
        fetchTodos();
    }, [])
    console.log(user);
  

    return (
        <div id={style.usersContainer} >
            <h1>Todos</h1>
      
            {user?.map((ele) => {
                let { title,completed, id,    userId } = ele;
                return (
                    <section key={id} className={style.user}>
                         
                        <h1>Title:{title}</h1>
                        <h2>Completed:{"True OR False"}</h2>
                        <h4>Type:{id}</h4>
                        {/* <h5>UserId:{userId}</h5> */}
                        <button>Refresh Page</button>
                    </section>
                )
      
            })
      
      
            }

       
        </div>
    )
}   

export default TasakTodos;
