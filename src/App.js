import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I'm clicked")}} />
//       </div>
//     )
//   }
// }

const App = () => {
    return (
      <div>
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </div>
    )
}


const Cat = () => {
  return <div>Meow</div>;
}
export default App;
