import React from 'react';
import './Button.css'

class Button extends React.Component{
    render(){

        //Everything here is abstracted. We're essentially defining properties (props) the Button class can take.
        //I believe the main concept of react to abstract as much as possible
        return(
            <div className={this.props.class}>
            <button onClick={this.props.function}>{this.props.name}</button>
            </div>
        )
    }

}
export default Button;