import React,{useState,useMemo} from "react";


export default function Hooks4(){
    const [count,setCount] = useState(0);
    const [todos,setTodos] = useState([]);

    const calculation = useMemo(()=> expensiveCalculation(count),[count]);
    // const calculation = expensiveCalculation(count);

    const increment = ()=>{
        setCount((count) => count + 1);
    }

    const addTodo = ()=> {
        setTodos([...todos,"New Task Added"]);
    };

    return(
        <>
            <h2>My Todos</h2>
            {
                todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })
            }
            <button onClick={addTodo}>Add</button>

            <div>
                count {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    );
}

const expensiveCalculation = (num) => {
    console.log('calculation....');
    for(let i = 0; i < 100; i++){
        num++
    }
    return num;
}