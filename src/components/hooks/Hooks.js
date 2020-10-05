import React, {useEffect, useState} from "react";

const Hooks = ({onCountChange = () => {}}) => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log("Only once");
    },[]);
    useEffect(() => {
        onCountChange(count);
        console.log("In every state change in count");
    },[count]);
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {setCount(count+1);}}>KLIK</button>
        </div>

    )
};

export default Hooks