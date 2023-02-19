import React,{useRef, useEffect} from "react";

export default function RefHooks(){
    const inputRef = useRef();
    const newRef = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            inputRef.current.textContent = 'Thank You new message';
            newRef.current.value = 'Hello new text';
        },5000);
    },[]);

    return(
        <>
            <h3 ref={inputRef}>wait for 5 seconds...</h3>
            <input ref={newRef} type="text" value="Good Morning" />
        </>
    );
}