import React, { useState } from 'react';
import logo from '../css/images/beerbucket_logo.svg';

type propsType = {

}

const ChatRoomsPage = (props: propsType) => (

    <div className="App-body">
        <img className="InitPage-logo" src={logo} alt="Where is the logo" />
        <p>Please enter your credentials, to join the beerbucket</p>
    </div>
)
export default ChatRoomsPage