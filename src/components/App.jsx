import React, { Component } from 'react';
import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <EmployeeList />
      </div>
    );
  }
}

export default App;
