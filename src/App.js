import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      name:"ayesha",
      age:21,
      standard:"M"
    };
  }
  changeName=()=>{
    this.setState({name:"Ayesha Noor Khan"});
  };
  changeAge=()=>{
    this.setState({age:20});
  };
  changeStandard=()=>{
    this.setState({standard:"S"});
  };

  render() {
    // this.state.name="Ayesha2";
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.standard}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.changeAge}>Change Age</button>
        <button onClick={this.changeStandard}>Change Standard</button>
      </div>
    );
  }
}

export default App;
