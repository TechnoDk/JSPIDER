import React, { Component } from 'react'

export default class LifeCycle extends Component {
   
    constructor() {
        super();
        console.log("i am constructor");
        this.state = { value: 0 };
        
    }
    componentDidMount() {

        console.log("Mounting phase");
        this.s1=setInterval(() => {
            console.log("interval hello");
            
        }, 2000 );
        
    }
    componentDidUpdate() {
        console.log("updating phase");
        
    }
    getSnapshotBeforeUpdate(props, state) {
        console.log("before update state was", state);
        return null;
        
    }
    componentWillUnmount() {
        console.log("unmounting phase" ,this);
        clearInterval(this.s1)
        
    }
    render() {    
      console.log("i am render");
      
    return (
      <div>
            <h1>Learn Lifecycle Method{ this.state.value}</h1>
            <button onClick={()=>this.setState({value:this.state.value+1})}>Click </button>
      </div>
    )
  }
}
