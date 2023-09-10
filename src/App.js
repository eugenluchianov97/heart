import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [open ,setOpen] = useState(false);
  return (
    <div className="container">
        {!open && (
            <>
            <div className="click" onClick={() => {setOpen(true)}}>Click on me!</div>
            </>
        )}

        {open && (
            <>
                <div>Kristina </div><div id="heart"></div><div>is beautiful!</div>
            </>
        )}

    </div>
  );
}

export default App;
