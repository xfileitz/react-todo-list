import React, { Component } from "react";
//import logo from "./logo.svg";
//import './App.css';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
//show ingo
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    // console.log("handle change");
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    // console.log("handle submit");
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false
      }
      //  ,      () => console.log(this.state)
    );
  };
  clearList = () => {
    console.log("clear list");
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    // console.log(`handle delete ${id} `);
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    console.log(`edit edit ${id}`);
  };
  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4"></div>
          <h3 className="text-capitalize text-center">Todo Input</h3>

          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          ></TodoInput>
          <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelte}
            handleEdit={this.handleEdit}
          ></TodoList>
        </div>
      </div>
    );
  }
}

export default App;
