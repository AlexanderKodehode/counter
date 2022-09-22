import React from "react";
import { useContext} from "react";
import CounterText from "./CounterText";
import {Button} from "../Component/style"


const CounterTextPage  = () => {
    const {count, setCount } = useContext(CounterText);
        
    const increase = () => {
        setCount((count) => count + 1);
    };
    
    const decrease = () => {
        setCount((count) => count - 1);
    };
    
    return(
        <>
            <h2>{count}</h2>
            <Button onClick={increase}>+</Button>
            <Button onClick={decrease}>-</Button>
        </>
    );
        
};


export default CounterTextPage