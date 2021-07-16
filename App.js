import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  let [score, setScore] = useState(0)
  return (
    <div className="App">
        <h1>This is counter application</h1>
        <h3>the value of score is {score}</h3>
        <button onClick = {()=>(score<25) ? setScore(score+1) :""}>Incremennt</button>
        <button onClick = {()=>(score>0) ? setScore(score-1) :""}>Decrement</button>
        <button onClick = {()=>{setScore(0)}}>Reset</button>
    </div>
  );
}

export default App;


// function hello(){

// }

// hello = () => {

// }



// function (){

// }

// () => {

// }






