import React from 'react';

export default class Home extends React.Component {

  constructor() {
    super();
    this.state = { name: "Kitty" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ name: "Bunny" });
  }

  render() {
    return (
      <h1 onClick={this.clickHandler}>
        {`Hello ${this.state.name}!`}
      </h1>
    );
  }
}