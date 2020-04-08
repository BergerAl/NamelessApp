import React from 'react';
import '../css/InitPage.css';
import logo from '../css/images/beerbucket_logo.svg';

type propsType = {
  sendUserName: Function;
  textFieldInput: string;
  setFieldInput: Function;
  setModalOpen: Function;
}

const InitPage = (props: propsType) => (

  <div className="App-body">
    <img className="InitPage-logo" src={logo} alt="Where is the logo" />
    <p>
      Please enter your credentials, to join the beerbucket
    </p>
    {credentialsFieldsRender(props.textFieldInput, props.setFieldInput)}
    <br />
    {SendButton(props.textFieldInput, props.sendUserName, props.setModalOpen)}
  </div>
)


function SendButton(textFieldInput: string, sendUserName: Function, setModalOpen: Function) {
  return (
    <button className="InitPage-button" onClick={() => isUserNameViable(textFieldInput, sendUserName, setModalOpen)}>
      Login
    </button>
  )
}

function credentialsFieldsRender(textFieldInput: string, setFieldInput: Function) {
  return (
    <div>
      <label className="InitPage-formText">Username:</label>
      <input type="text" id="inputField" name="inputField" value={textFieldInput} onChange={e => setFieldInput(e.target.value)} />
      <label className="InitPage-formText">Password:</label>
      <input type="text" id="passwordField" name="passwordField" />
    </div>
  )
}

function isUserNameViable(textFieldInput: string, sendUserName: Function, setModalOpen: Function) {
  if (textFieldInput.length > 0) {
    sendUserName(textFieldInput);
    setModalOpen(false);
  }
}

export default InitPage