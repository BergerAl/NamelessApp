import React from 'react';
import '../css/InitPage.css';

type propsType = {
  sendMessage: Function;
  textFieldInput: string;
  setFieldInput: Function;
}

const InitPage = (props: propsType) => (

  <div className="App-body">
    <p>
      Press the button to send a message
        </p>
    {textInputFieldRender(props.textFieldInput, props.setFieldInput)}
    <br/>
    {SendButton(props.textFieldInput, props.sendMessage)}
  </div>
)


function SendButton(textFieldInput: string, sendMessage: Function) {
  return (
    <button className="InitPage-button" onClick={() => sendMessage(textFieldInput)}>
      Send text
    </button>
  )
}

function textInputFieldRender(textFieldInput: string, setFieldInput: Function) {
  return (
    <div>
      <input type="text" id="inputField" name="inputField" value={textFieldInput} onChange={e => setFieldInput(e.target.value)} />
    </div>
  )
}

export default InitPage