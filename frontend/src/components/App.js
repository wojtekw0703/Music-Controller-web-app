import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from './HomePage';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class App extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    return (
      <div className="center">
        <HomePage></HomePage>
      </div>
      
      );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);