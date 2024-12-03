import { Component } from "react";

class StatesInCBC extends Component{
    state = { count: 0 };// initializing state

    updateState = () => {
        
            this.setState({ count: this.state.count + 1 });
            
    
        
    };
    decrement = () => {
    
            this.setState({ count: this.state.count - 1 });
        
    }
    reset = () => {
    
            this.setState({ count:0 });
        
    }
    
    render() {
        return (
            <div>

                <button > <h3>Date:-02/12/2024</h3>(Monday)
                </button>
           
                <h1>States in class Based
                    
                </h1>
                <h2>Counter <mark>{this.state.count}</mark></h2>
            
                
                <button onClick={this.updateState}>Increment</button>
                {/* <button onClick={this.updateState}> decrement</button> */}
                <button onClick={this.decrement}>decrement</button> 
               <button onClick={this.reset}>Reset</button> 
                </div>
        )
    }
}
export default StatesInCBC;