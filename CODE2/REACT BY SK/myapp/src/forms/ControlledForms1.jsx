import { useState } from "react";
const ControlledForms1 = () => {
    let [username, setUsername] = useState("");
    let [useremail, setUseremail] = useState("");
    let [userpassword, setUserpassword] = useState("");
    let handleUsername = (e) => {
        // console.log(e);//SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}
        
        setUsername(e.target.value);
        
    }
    let handleUseremail = (e) => {
        setUseremail(e.target.value);
        
    }
    let handleUserpassword = (e) => {
        setUserpassword(e.target.value);  
        
    }
    let formSubmit = (e) => {
        e.preventDefault();
        document.write(`<h1>name:${username}</h1>
                         <br/> email:${useremail} <br/> password:${userpassword}`);
        console.log({ username, useremail, userpassword });
        // clearing input fields
        setUsername("")
        setUseremail("")
        setUserpassword("")
        
    }
    return (
        <div >
            <h1>ControlledForms1</h1>
            <form onSubmit={formSubmit}>
                <label htmlFor="" >Name</label>
                <input type="text"  value={username} onChange={handleUsername}  placeholder="username"></input>
                <br />
                <label htmlFor="" >Email</label>
                <input type="email"  value={useremail} onChange={handleUseremail}></input>
                <br />
                <label htmlFor="" >Password</label>
                <input type="password"  value={userpassword}  onChange={handleUserpassword}></input>
                <br />
                <button type="sumbit" >submit</button>
            </form>
        </div>
    )
}
export default ControlledForms1; 