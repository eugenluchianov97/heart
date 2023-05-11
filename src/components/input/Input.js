import 'bootstrap/dist/css/bootstrap.css';

function Input(props){


    return(
        <input type="text" onInput={props.updateData}/>
    )
}

export default Input;