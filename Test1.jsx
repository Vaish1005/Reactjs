import { useState } from "react";
function Test1(){
    const [data, setData]=useState({
        username:"",
        password:""
    })
    const submitHandler=e=>{
        e.preventDefault();
    }
    return(
        <div>
         <form onSubmit={submitHandler}>
        Enter the userName:<input type="text" placeholder="userName"/>
        Enter the passWord:<input type="password"placeholder="password"/>
         </form>
        </div>
    )
}
export default Test1;