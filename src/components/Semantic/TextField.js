import React from "react";
import "./test.css";

class TextField extends React.Component {
  render() {
    return (
        <div className="ui massive icon input text">
          <input type="text" placeholder="Enter email here" onChange={this.props.onChange}  />
          <i className="envelope icon" />
        </div>
    );
  }
}
export default TextField;
