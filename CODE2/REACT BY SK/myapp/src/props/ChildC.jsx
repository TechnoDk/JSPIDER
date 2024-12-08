const ChildC= ( {setterFun}) => {
//    console.log(setterFun);
    let data = "Jai Shree Ram🙏";

    
    

    return (
        <div>
            <h1>hello world!!🤷‍♂️ </h1>
            <button onClick={()=>setterFun(data)}>Send to parent(Ram Ram) </button>
             </div>
    )
}
export default ChildC;
