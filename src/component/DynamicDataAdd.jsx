import React,{useState} from "react";

export default function DynamicDataAdd(){
    const [state,setState] = useState({name:'',email: '', location: '', age: 0});
    const [chart,setChart] = useState([]);

    const handelchange = (e)=>{
        setState({...state,[e.target.name]:e.target.value});
    }
    const handelClick = (e)=>{
       setChart([...chart,state]);
       setState({name: '', email: '', location: '', age: ''})
    }
    
    return(
        <>
            <form>
                <label>Name</label>
                <input type="text" name="name" value={state.name} onChange={handelchange} /><br />
                <label>Email</label>
                <input type="email" name="email" value={state.email} onChange={handelchange} /><br />
                <label>Location</label>
                <input type="text" name="location" value={state.location} onChange={handelchange} /><br />
                <label>Age</label>
                <input type="number" name="age" value={state.age} onChange={handelchange} /><br />

                <button type="button" onClick={handelClick}>Add</button>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Age</th>
                        </tr>
                        {
                            chart.map(
                                (item)=>{
                                    return(
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.location}</td>
                                            <td>{item.age}</td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </thead>
                </table>

            </form>
        </>
    )
}