import React, { Component, Fragment } from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { reactLocalStorage } from 'reactjs-localstorage';

export class Logout extends Component {

    logout = ()=>{
        reactLocalStorage.clear()
    }
    render() {
        return (
           <Fragment>
            <ListItem button onClick={this.logout} >
                <ListItemIcon className="clrwhite">
                    <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText className="clrwhite" primary={`Logout`} />
            </ListItem>
           </Fragment>
        )
    }
}

export default Logout
