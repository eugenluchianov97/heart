import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 2000)
    })
    const [open ,setOpen] = useState(false);
  return (
    <div className="container">
        {!open && (
            <>
            <div className="click" onClick={() => {setOpen(true)}}>Привет , Олюнь!</div>
            </>
        )}

        {open && (
            <>
                <div> Я </div><div id="heart"></div><div>тебя!</div>
            </>
        )}

    </div>
  );
}

export default App;
