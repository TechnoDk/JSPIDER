import { useState } from "react";
const States = () => {
    //  console.log(useState());//[undefind ,f]

    let [state, setState] = useState("Hello");
    let [cart, setCart] = useState("add to cart");
    // console.log(state);

    function btnclick() {
        console.log("btn Click");
        setState("Byee")

    }
    function click() {
         setCart("go to cart")

    }
    return (
        <div>
            <h1>States in FBC {state}</h1>
            <button onClick={btnclick}>Click</button>
            {/* <button onClick={() => {
                setCart("go to cart")}}>{cart}</button> */}
            <button onClick={click}>{cart}</button>
        </div> 
    );
};
export default States;