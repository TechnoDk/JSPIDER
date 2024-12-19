import React, { useEffect, useState } from 'react';
import style from "./taskPhotos.module.css";

const TaskPhotos = () => {
    let [user, setUser] = useState(null);
    useEffect(() => {
        async function fetchPhotos() {
          let response = await fetch("https://jsonplaceholder.typicode.com/photos");
            let photos = await response.json();
            setUser(photos);
        
      }
      fetchPhotos();
 },[])
  console.log(user);
  

  return (
    <div id={style.usersContainer} >
         <h1>Photos</h1>
      
      {user?.map((ele) => {
        let { title, thumbnailUrl, id } = ele;
        return(
      <section key={id} className={style.user}>
        <img src={thumbnailUrl} alt="" height={200} width={200} />
            <h1>Title:{title}</h1>
            <h4>Type:{id}</h4>
            <button>Forward Page</button>
      </section>
      )
      
    })
      
      
    }

       
    </div>
  )
}

export default TaskPhotos;
