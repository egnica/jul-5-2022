import { useState } from "react";
const ThreeButtons = (props) => {
const  [buttonInput, ChangeButtonInput] = useState('Select a Button');

props.onButtonInput(buttonInput)
    return(
        <div>
            <p>{buttonInput}</p>
           <button onClick= {() => ChangeButtonInput('Button one is clicked') }>Button 1</button>
           <button onClick = {() => ChangeButtonInput('Button two is clicked') }>Button 2</button>
           <button onClick = {() => ChangeButtonInput('Button three is clicked')}>Button 3</button>
        </div>
    )
}
export default ThreeButtons;