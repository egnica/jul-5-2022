import Form from './Form/Form';
import ThreeButtons from './ThreeButtons/ThreeButtons';
import ListItem from './ListItem/ListItem';
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

  const characters = [
    {
        id: '12',
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
      id: '13',
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male', 
    },
    {
        id: '14',
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female', 
    },
    {
        id: '15',
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male', 
    },
]




  return (
    <div className="App">
      <Form onStingTransfer = {stringData} onInputTransfer = {TransferHandler}/>
      <p>{userInput}</p>

      <ThreeButtons onButtonInput = {ThreeButtonHandler}/>
      <p>{buttonInput}</p>
      <ListItem characterList = {characters}/>
    </div>
  );
}

export default App;
