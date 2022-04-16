import { Component } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css"

export default class App extends Component {
  state = {
    todos: [], //list
    task: "", //each input that we have to manage
    done: false
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  

  addTask = (e) => {
    e.preventDefault();
    const newTodo = { task: this.state.task, done: this.state.done };
    const todos = [...this.state.todos, newTodo];
    console.log(newTodo);
    this.setState({ todos, task: "", done: false });
  };

  render() {
    return (
      <section className="container">
        <h2>Todo List</h2>
        
        {/* //form not refactured  */}
        <form>
          <label>
            <span>Add Todo </span>
            <input
            className="input"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            ></input>
          </label>
          <button onClick={this.addTask}>Add a Task</button>
        </form>
        <hr />
        <TaskCard handleClick={this.handleClick} todos={this.state.todos} />
      </section>
    );
  }
}





