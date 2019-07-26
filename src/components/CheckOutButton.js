import React from "react";

class CheckOutButton extends React.Component {
  render() {
    return (
      <div>
        <button
          className="checkout"
          onClick={() => {
            this.props.history.push("/HomePage");
          }}
        >
          CheckOut
        </button>
      </div>
    );
  }
}
export default CheckOutButton;
