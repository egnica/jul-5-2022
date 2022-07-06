import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import './App.css';
import {useState } from 'react';
function App() {

  const stringData = 'This is from App.js to Form.js'
  const [userInput, ChangeUserInput] = useState('');
  const [buttonInput, ButtonInputChange] = useState('');

  const TransferHandler = (value) => {
    ChangeUserInput(value);

  }
  const ThreeButtonHandler = (value) => {
    ButtonInputChange(value);

  }
  return (
    <div className="App">
      <Form onStingTransfer = {stringData} onInputTransfer = {TransferHandler}/>
      <p>{userInput}</p>

      <ThreeButtons onButtonInput = {ThreeButtonHandler}/>
      <p>{buttonInput}</p>
    </div>
  );
}

export default App;
