import React from "react";
import "./test.css";
import pic from "../icon/appName.png";
import ForgetSubmitButton from "./ForgetSubmitButton";
import TextField from "./TextField";
import { Button } from 'semantic-ui-react';
class Test extends React.Component {

  constructor() {
    super();
    this.handleEmailChange=this.handleEmailChange.bind(this)
    this.state ={
      email:""
    }
  }
  handleEmailChange(e){
    this.setState({email: e.target.value});
  }
  render() {
    return (
      <div className="container">
        <div className="logoDiv">
          <img className="ui centered medium image" src={pic} alt="logo" />

          <div className="textFields">
            <h1 className="ui header">Forgot Password?</h1>
            <h2 className="ui header">You can reset your password here</h2>
            <TextField onChange = {this.handleEmailChange}/><br/>
            <ForgetSubmitButton email = {this.state.email} /><br/>
            <button className="ui button">Click Here</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Test;
