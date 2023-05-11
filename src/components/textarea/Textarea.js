import { useState, useEffect } from 'react';
function Textarea (props){
    const [text_val, setText] = useState('');

    useEffect(()=> {
        setText(props.text)
    },[props.text]);
    function onChange(e){
        setText(e.target.value)
    }
    return(
        <textarea value={text_val} onChange={onChange } rows="5"></textarea>
    )
}

export default Textarea;