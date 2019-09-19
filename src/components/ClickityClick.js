// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor(){
        super();

        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue'
        };
    }
    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        })
    }
    render(){
        return(
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null: 'not'}  been clicked!
                </p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;