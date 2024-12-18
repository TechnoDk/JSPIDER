import { useRef } from "react";
import style from "./uncontrolled.module.css";
const UncontrolledForms = () => {
    let UsernameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();


    let formSubmit = (e)=>{
        e.preventDefault();
        // console.log(UsernameRef.current.value);
        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);
        let user = {
            username: UsernameRef.current.value,
            email: emailRef.current.value,
            password:passwordRef.current.value,
        }
        console.log(user);
        
        
        
    }
    
    return (
        <div>
            <h1>UncontrolledForms</h1>
            <form className={style.form} action="" onSubmit={formSubmit}>
                 
           
            <label htmlFor="">Username</label>
            <input type="text"  placeholder="Enter Your  Name" ref={UsernameRef}/>
            <br />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Type Your Email" name="" id="" ref={emailRef}/>
            <br />
            <label htmlFor="">Password</label>
            <input type=" password" placeholder="Secure Your Account" name="" id="" ref={passwordRef} />
            <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default UncontrolledForms;