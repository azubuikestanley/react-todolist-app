import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Read a  book on react',
      },
      {
        id: 2,
        title: 'Learn how to eat',
      },
      {
        id: 3,
        title: 'Read a  book on Laravel',
      },
    ]
  }

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
