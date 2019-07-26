import React from "react";
import "./test.css";


class ForgetSubmitButton extends React.Component {
  constructor() {
    super();
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
     console.log("Email Address is:",this.props.email);
  }

  render() {
    return (
       <> 
        <div className="btn">
            <button className="ui primary button" onClick={this.buttonHandler}  >Send</button>
        </div>
      </>
    );
  }
}
export default ForgetSubmitButton;
