import React from 'react';
import {useState, useEffect,useRef} from "react";

import 'bootstrap/dist/css/bootstrap.css';

function Button(props) {
    const [count, setCount] = useState(0);



    function increments(){
        setCount((current) => {
            return current + 1;
        });
    }

    return (
            <button className="btn btn-success" onClick={increments} type="button">{props.text} {count}</button>
    )
}

export default Button;