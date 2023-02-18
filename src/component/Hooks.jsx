import React, {useState} from "react";

export default function Hooks (){

    const [age, setAge] = useState(20);
    const [loc,setLoc] = useState('Patna');
    const [name,setName] = useState('Adi');

    const valueChange = (e)=>{
        if(e.target.name === "name"){
            setName(e.target.value);
        }
        else if(e.target.name === 'age'){
            setAge(e.target.value);
        }
        else if(e.target.name === 'loc'){
            setLoc(e.target.value);
        }
    }

    return(
        <>
            <h3>I am {age} years old. My name is {name}. I stay in {loc}</h3>
            Enter Name : <input type="text" name="name" onChange={valueChange} />
            <br /><br />
            Enter Age: <input type="number" name="age" onChange={valueChange} />
            <br /><br />
            Enter Location:
            <select name="loc" onChange={valueChange}>
                <option value="">Select City</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Howrah">Howrah</option>
                <option value="Sealdah">Sealdah</option>
            </select>
        </>
    );
}