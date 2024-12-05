// import Navbar from "./Component/Navbar";
// import NavbarCBC from "./Component/NavbarCBC"
// import States from "./states/fbc/States";
// import Counter from "./states/fbc/Counter";
// import StatesInCBC from "./states/cbc/StatesInCBC";
import Parent from "./props/Parent";
import PropsDrilling from "./props/propsdrilling/PropsDrillingParent";
const App = () => {
    return (
        <div>
           
            
            {/* <Navbar></Navbar>
             <NavbarCBC/>
            <Navbar></Navbar> */}
           {/* <Navbar></Navbar> */}
           
            <h1> I am App component
            </h1>
            {/* <States/> */}
            {/* <Counter/> */}
            {/* <StatesInCBC/> */}
            <Parent />
            <PropsDrilling/>
        </div>
    );

};
export default App;
    