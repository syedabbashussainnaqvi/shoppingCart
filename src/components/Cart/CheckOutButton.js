import React from "react";
import { withRouter } from 'react-router-dom'
import "./checkOutButton.css";
import { navigate } from "@reach/router";
class CheckOutButton extends React.Component {

    constructor(){
        super();
        this.addHistoy= this.addHistoy.bind(this);
    }
    addHistoy(){
        console.log(this.props.orders);
        navigate("/homePage");
        //this.props.history.push(`/HomePage/${JSON.stringify(this.props.orders)}`);
        
    }


    render() {
        return (
            <>
             <button className="check-out" disabled={Object.keys(this.props.orders).length > 0 ? false :true} onClick={this.addHistoy}>Check Out</button>
            </>
        )
    }
}
export default (CheckOutButton);
