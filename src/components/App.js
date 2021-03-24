import React, {Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          todo: []
      };
      this.handleAdd = this.handleAdd.bind(this);
  }

  // データ保存
  handleAdd(e){
    console.log(e.target.title.value);
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <h1>React To Do App</h1>
        <Form handleAdd={this.handleAdd}/>

        <List />
      </div>
    );
  } 
}
