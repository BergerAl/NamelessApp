import React from 'react';
import '../css/InitPage.css';

type propsType = {
  setCount: Function;
  randomNumber: number;
}

const InitPage = (props:propsType) => (

  <div className="App-body">
    <p>
      Press the button to increase the counter
        </p>
    {firstButton(props.randomNumber, props.setCount)}
    {displayRandomNumer(props.randomNumber)}
  </div>
)


function firstButton(randomNumber: number, setCount: Function) {
  return (
    <button onClick={() => setCount(randomNumber + 1)}>
      Random Number
      </button>
  )
}

function displayRandomNumer(randomNumber: number) {
  return (
    <div>
      {randomNumber}
    </div>
  )
}

export default InitPage