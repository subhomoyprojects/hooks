import React,{useRef,useState} from "react";

export default function StopWatch(){
    const timerIdRef = useRef(0);
    const [count,setCount] = useState(0);

    const startHandler = () =>{
        timerIdRef.current = setInterval(() => setCount(count => count + 1),1000);
    };
    const stopHandler = ()=>{
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };
    const resetHandler = ()=>{
        setCount(0);
        timerIdRef.current = 0;
    };

    return(
        <>
            <div className="">Timer: {count}s</div>
            <div>
                <button onClick={startHandler}>Start</button>
                <button onClick={stopHandler}>Pause</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </>
    );
}

