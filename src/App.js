import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I'm clicked")}} />
      </div>
    )
  }
}

export default App;
