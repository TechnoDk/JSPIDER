import ChildA from "./ChildA";                    
import ChildB  from "./ChildB"
const Parent = () => {
    //  let data1 = "hello world!! ,I am props";
    let data = [10, 20, 30, 40]
    let user = {
        id: 10,
        ename: 'Chandan'
    };



    function Display() {
    console.log("i am display function");
    
}
    return (
        <div>
            {/* <ChildA abc={data} /> */}
            
            
            {/* <ChildA dbData={data} abc={data1} /> */}
            <ChildA propVal={{data,user}} />
            <ChildB fun={Display } />
        </div>
    )
}
export default Parent;