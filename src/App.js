import React from 'react';
import PropTypes from 'prop-types';

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
  const profiles = [
    { name:"Taro", age:10 },
    { name:"Hanako", age:5 },
    { name:"Hanako", age:5 },
    { name:"Hanako", age:5 },
    { name:"Hanako", age:5 },
    { name:"Hanako", age:5 },
    { name:"デーモン閣下" },
  ]
    return (
      <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      </div>
    )
}


const User = (props) => {
  return <div>こんにちは！ {props.name}さん！ {props.age}歳ですね！</div>;
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}

User.defaultProps = {
  age: 100012
}
export default App;
