import React, { Component } from 'react';
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


export default class CreateRoomPage extends Component {
  static defaultProps = {
    votesToSkip:2,
    guestCanPause: true,
    update: false,
    roomCode:null,
    updateCallback: () =>{},
  };
    constructor(props)
    {
        super(props);
        this.state = {
            guestCanPause: this.props.guestCanPause,
            votesToSkip: this.props.votesToSkip,
        };
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
        this.handleVotesChange = this.handleVotesChange.bind(this);
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
      }
    
      handleVotesChange(e) {
        this.setState({
          votesToSkip: e.target.value,
        });
      }
    
      handleGuestCanPauseChange(e) {
        this.setState({
          guestCanPause: e.target.value === "true" ? true : false,
        });
      }
    
      handleRoomButtonPressed() {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            votes_to_skip: this.state.votesToSkip,
            guest_can_ause: this.state.guestCanPause,
          }),
        };
        fetch("/api/create-room", requestOptions)
          .then((response) => response.json())
          .then((data) => this.props.history.push('/room/'+data.code));
      }

    render() {
        const title = this.props.update ? "Update room" : "Create a room";
        return <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                   {title}
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
               <FormControl compoment="fieldset">
                   <FormHelperText>
                       <div align='center'>
                           Guest Control of playback state
                       </div>
                   </FormHelperText>
                   <RadioGroup row defaultValue="true" onChange={this.handleGuestCanPauseChange}>
                       <FormControlLabel value="true" control={<Radio color="primary"></Radio>}
                           label="Play/Pause"
                           labelPlacement = "bottom">
                        </FormControlLabel>
                        <FormControlLabel value="false" control={<Radio color="secondary"></Radio>}
                           label="No control"
                           labelPlacement = "bottom">
                        </FormControlLabel>
                       
                        </RadioGroup>
               </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl>
                    <TextField 
                    required={true} type="number" onChange={this.handleVotesChange} defaultValue={this.state.votesToSkip}
                    inputProps={{
                        min:1,
                        style: { textAlign: "center" },
                    }}
                    />
                  <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleRoomButtonPressed}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    ;
  }
}