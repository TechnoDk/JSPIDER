import React, { useEffect, useState } from 'react';
import style from './fetch.module.css';

const FetchAPI = () => {

    //will come dbdata after array of object return
    let [dbData, setDbData] = useState(null);


    // useEffect(async() => { //if we add async then give warning
    //     let response = await fetch("https://api.github.com/users");
    //     console.log(response);//Error:- react-dom.development.js:86 Warning: useEffect must not return anything besides a function, which is used for clean-up.

// It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state

    useEffect(() => { //if we add async then give warning
        async function fetchData() {
            let response = await fetch("https://api.github.com/users");
            console.log(response);
            let data = await response.json();
            console.log(data);// Array of object:- [{},{},{}....]10seconds
            setDbData(data)
             
        }
        fetchData();
       
  },[])
  console.log(dbData);
  


  return (
    <div>
          <h1>Hello World Fetch API</h1>
          {
              dbData?.map((ele) => { //? optional warning
                  return (
                      <section key={ele.id} className={style.elem}>
                          <h1>{ele.login}</h1>
                          <img src={ele.avatar_url} height={200} width={300} alt="" />
                      </section>
                  )
              })
          }
    </div>
  )
}

export default FetchAPI;
