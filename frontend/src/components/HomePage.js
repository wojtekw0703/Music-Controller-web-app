import React, { Component } from 'react';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class HomePage extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (<Router>
            <Switch>
                <Route exact path = '/'><p>This is the Home Page</p></Route>
                <Route path = '/join' component={RoomJoinPage}></Route>
                <Route path = '/create' component={CreateRoomPage}></Route>
            </Switch>
        </Router> );
     
        }
}
 