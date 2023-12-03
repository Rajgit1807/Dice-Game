import './App.css';
import React from 'react'
import HomePageGame from './components/HomePageGame';
import PlayGame from './components/PlayGame';

function App() {

  const [isGameStarted,SetIsGameStarted] = React.useState(false)

  function handleGameStart(){
    SetIsGameStarted(PrevState => !PrevState)
  } 

  return (
    <div className="App">
      {isGameStarted?<PlayGame/>:<HomePageGame handleClick = {handleGameStart}/>}
    </div>
  );
}

export default App;
