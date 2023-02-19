import React,{useState,useRef} from "react";

function LogButtonClick(){
    const countRef = useRef(0);
    const [hit,setHit] = useState(0);

    const handler = ()=>{
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
        setHit(countRef.current);
    }
    console.log('I render');

    return(
        <>
            <button onClick={handler}>Hit me</button>
            <br /><br />
            <h3>Page Hita {hit} times</h3>
        </>
    );
}

export default LogButtonClick;