import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: "milk", status: "complete" },
			{ id: 2, content: "bread", status: "incomplete" },
			{ id: 3, content: "jam", status: "incomplete" }
		]
	};

	addTodo = todo => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({ todos });
	};

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({ todos });
	};

	completeTodo = id => {
		const todos = this.state.todos;
		console.log(todos);
	};

	render() {
		return (
			<div className="App">
				<h1>Todos</h1>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
