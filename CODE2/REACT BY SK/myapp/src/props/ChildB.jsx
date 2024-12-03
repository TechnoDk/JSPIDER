const ChildB= ({fun}) => {
//    console.log(fun);

    return (
        <div>
            <h1>I am child B</h1>
            <button onClick={fun}>Click</button>
        </div>
    )
}
export default ChildB;
