import { useState } from "react";

const Form = (props) => {
const [userInput, ChangeUserInput] = useState('')
const stringData = props.onStingTransfer;

    const InputHandler = (event) => {
        ChangeUserInput(event.target.value)
    }
    const SubmitHandler = (event) => {
         event.preventDefault()
         props.onInputTransfer(userInput);
         ChangeUserInput('');
    }

    return(
        <form onSubmit = {SubmitHandler}>
            <p>{stringData}</p>
            <label>Enter Data: </label>
            <input type = 'text' onChange = {InputHandler} value = {userInput}></input>
            <button>Submit</button>
        </form>
    )
}
export default Form;