const ChildB= ({fun,fun1}) => {
//    console.log(fun);

    return (
        <div>
            {/* <h1>I am child B</h1> */}
            <button onClick={fun}>Click</button>
            <button onClick={fun1}>Increment</button>
        </div>
    )
}
export default ChildB;
