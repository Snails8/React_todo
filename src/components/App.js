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
    e.preventDefault();
    // formのデータをpush
    this.state.todo.push({title: e.target.title.value});
    // stateに上書き
    this.setState({todo: this.state.todo});
    // value空に
    e.target.title.value = '';
  }
  render() {
    return (
      <div className="App">
        <h1>React To Do App</h1>
          
        <Form handleAdd={this.handleAdd}/>

        // 子へstate 変数todoを渡す
        <List this.state.todo/>
      </div>
    );
  } 
}
