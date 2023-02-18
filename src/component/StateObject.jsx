import React, {useState} from "react";

const StateObject = () =>{
    const[state, setState] = useState({age: 19, siblingsNum: 4});
    const handelClick = (val,e)=>{
        setState({
            ...state,
            [val]: state[val] + 1
        });
    }
    const handelClick1 = (val,e)=>{
        setState({
            ...state,
            [val]: state[val] + 2
        });
    }
    return(
        <div>
            <p>Today I am {state.age} years of age</p>
            <p>I have {state.siblingsNum} siblings</p>
    
            <div>
                <button onClick={handelClick.bind(null, 'age')}>Get Older</button>
                <button onClick={handelClick1.bind(null, 'siblingsNum')}>More Siblings</button>
            </div>
        </div>
    );
}

export default StateObject