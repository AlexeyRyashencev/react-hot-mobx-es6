import React from 'react';

class Home extends React.Component {

  constructor() {
    super();
    this.state = { name: "Kitty" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    matchesStore.add();
    console.log(e.curr);
  }

  render() {
    let matches = matchesStore.getAll();
    const matchItems = matches.map((match) =>
      <li>
        {match}
      </li>
    );
    return (
      <ul>
        {matchItems}
        <button onClick={this.clickHandler}>Add</button>

      </ul>
    );
  }
}
export default Home;
