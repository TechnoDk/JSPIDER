import { useState } from "react";
import Style from "./controlledForms2.module.css";
const ControlledForms2 = () => {
    let [formData, setFormData] = useState(
        
        {
            useremail: "",
            userpassword:"",
    
         }

    )
    let handleFormData = (e) => {
        // console.log(e);
        let { name, value } = e.target;//destructuring name:value then object name will change useremail and destructuring
        //console.loh({[name]:value});
        setFormData({ ...formData, [name]: value });//spreading the data 
        
        
    };
    let formSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
        
        setFormData(
            {
                useremail: '',
                userpassword:'',
            }
        )
        
    };
     return (
        <div  className={Style.div1}>
             <h1 className={Style.header}>Controlled Forms  :-Optimal Way</h1>
             <form action="" onSubmit={formSubmit} className={Style.form}>
                 <label htmlFor=""className={Style.lemail}>Useremail:</label>
                 <input type=" email" className={Style.email} value={formData.useremail}  onChange={handleFormData} name="useremail" placeholder="Enter your email" />
                 <br />
                 
                 <label htmlFor="" className={Style.lpassword}>Password :</label>
                 <input type="password" className={Style.password} value={formData.userpassword} onChange={handleFormData} name="userpassword" placeholder="Enter your password" />
                 <br />
                 <br />
                 <button type="submit" className={Style.btn}>submit</button>
             </form>
        </div>
    )
}
export default ControlledForms2; 