import React,{useState} from "react";

export default function Task1(){
    const [state,setState] = useState({name:'',email:'',location: ''});

    const handelChange = (e)=>{
        e.preventDefault();
        setState({
            name: e.target.name.value,
            email: e.target.email.value,
            location: e.target.location.value
        });
    }

    return(
        <>
            <form action="" onSubmit={handelChange}>
                <input type="text" name="name" />    
                <input type="email" name="email" />    
                <select name="location">
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pune">Pune</option>
                </select>   
                <input type="submit" />
            </form>  
            <p>My name is {state.name}</p>
            <p>My Email is {state.email}</p>
            <p>My Location is {state.location}</p>
        </>
    );
}

