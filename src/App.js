import React from 'react';

import "./css/style.css";

import 'bootstrap/dist/css/bootstrap.min.css';


import {randomString} from "./helpers/helpers";

import {useState, useEffect} from 'react';


function App(){

    const [show, setShow] = useState(false)

    function showHeart(){
        setShow(true)
    }
    return (
        <div className="d-flex flex-column mx-auto">
            {!show &&
                <button className="btn" onClick={showHeart}>Привет, Оля!Нажми на меня!))</button>
            }

            {show &&
                <div className="d-flex mx-auto">
                    <div className="text">I</div> <div className="heart "></div> <div className="text">YOU!</div>
                </div>
            }

        </div>

    );
}

export default App;