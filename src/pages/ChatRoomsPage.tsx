import React from 'react';
import '../css/ChatRoomPage.css'
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

type propsType = {
    listChatRooms: string[]
    joinChatRoom: Function
}

const Wrapper = styled.div`
  cursor: pointer;
`
const getCardTitleStyle = () => ({
    display: 'flex',
    alignItems: 'center'
})

const ChatRoomsPage = (props: propsType) => (
    <div className="App-body">
        <MuiThemeProvider>
            <div>
                {props.listChatRooms.map(chatroom => (
                    <Paper
                        key={chatroom}
                        style={{ maxWidth: 600, marginBottom: 40 }}
                        zDepth={5}
                    >
                        <Wrapper>
                            <Card>
                                <CardMedia
                                    overlay={
                                        <CardTitle
                                            title={chatroom}
                                            style={getCardTitleStyle()}
                                        />
                                    }
                                >
                                    <img height="100%" src={randomGooglePicture()} alt="" />
                                </CardMedia>
                            </Card>
                        </Wrapper>
                    </Paper>))}
            </div>
        </MuiThemeProvider>
    </div>
)

function randomGooglePicture() {
    return (`https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/${(Math.floor(Math.random() * Math.floor(16)) + 1)}.jpg`)
}

export default ChatRoomsPage