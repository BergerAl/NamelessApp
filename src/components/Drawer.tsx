import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    drawerContainer: {
        overflow: 'auto',
    },
});

type propsType = {
    state: boolean;
    toggleDrawer: Function;
    userName: string;
    chatRoomList: string[];
    joinChatRoom: Function;
}

export default function SwipeableTemporaryDrawer(props: propsType) {
    const classes = useStyles();

    const toggleDrawer = props.toggleDrawer;

    const handleChatRoomJoin = (event: React.MouseEvent<HTMLElement>) => {
        props.joinChatRoom(event.currentTarget.textContent);
        //TODO close Drawer: AB
    };

    const list = () => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: false,
            })}
            onKeyDown={toggleDrawer(true)}
        >
            <ListItem button key="user">
                <ListItemIcon>{<AccountCircle />}</ListItemIcon>
                <ListItemText primary={props.userName} />
            </ListItem>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText primary="Chats" />
                </ListItem>
                {props.chatRoomList.map((text, index) => (
                    <ListItem button key={text} onClick={handleChatRoomJoin}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText primary="Achivements" />
                </ListItem>
                {['Example1', 'Example2', 'Example3'].map((text, index) => (
                    <ListItem button key={text} onClick={toggleDrawer()}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor={'left'}
                open={props.state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}
