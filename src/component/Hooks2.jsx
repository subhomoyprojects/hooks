import React, {useState,useEffect} from "react";

export default function Hooks2 (){
    const [name,setName] = useState({firstName: 'Subhomoy', lastName: 'Pal'});
    const [title,setTitle] = useState('English');

    // useEffect() run after render

    useEffect( () => {
        const timer = setInterval(()=>{
            setName({firstName: 'Adi', lastName: 'Das'})
            setTitle('History')
        },5000);
        return()=> clearInterval(timer);

    },[]);

    return(
        <div>
            <h1>Title: {title}</h1>
            <h1>Name: {name.firstName}</h1>
            <h1>Surname: {name.lastName}</h1>
        </div>
    );
}
