// const ChildA = (prop) => {
//     console.log(prop);//{abc:Hello world!!}

    
//     return (
//         <div>
//             <h1>{prop.abc}</h1>
//         </div>
//     )
// }
// export default ChildA;

// Way 1 
// const ChildA = ({dbData}) => {
//     console.log(dbData);//[10, 20, 30, 40]
    
    
//     return (
//         <div>
//             {/* <h1>{prop.abc}</h1> */}
//         </div>
//     )
// }
// export default ChildA;

// Way 2
// const ChildA = (x) => {
//     console.log(x);//{dbData: Array(4)} Object form 
//     console.log(x.abc);
//     // console.log(x.dbData);  // we can access object 
    
    
    
//     let { dbData,abc } = x;// object destructuring
//     console.log(dbData, abc);//[10,20,30,40] , if object key is not present then we can access then give undefind
    
const ChildA = (x) => {
    console.log(x);//{propVal: {data,user}}}

     
    
    let { propVal: { data, user: { id, ename } } } = x;
    console.log(data,id,ename);
    
     
    
    
    return (
        <div>
            {/* <h1>hello world</h1> */}
        </div>
    )
}
export default ChildA;
