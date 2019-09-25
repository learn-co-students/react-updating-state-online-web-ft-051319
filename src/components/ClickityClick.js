import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    this.setState({
        hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked)) // prints true
    // State changes, however instant they might appear, happen asynchronously. 
    // If we want to access our new state after it has been updated, we can 
    // optionally add a callback as a second argument to the this.setState() function

    console.log(this.state.hasBeenClicked); // prints false

    // Setting state is not synchronous. State updates are batched internally and
    // then executed simultaneously whenever React feels it's appropriate. 
    /* React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. */
    /* To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument: */
    // Correct
    // this.setState((state, props) => ({
    //     counter: state.counter + props.increment
    // }));
    // Wrong
    // this.setState({
    //     counter: this.state.counter + this.props.increment,
    // });
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;