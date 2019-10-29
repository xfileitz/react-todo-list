import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="List-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}></span>
          <i className="fas fa-pen"></i>
        </div>
        <div className="todo-icon">
          <span className="mx-2 text-danger" onClick={handleDelete}></span>
          <i className="fas fa-trash"></i>
        </div>
      </li>
    );
  }
}
