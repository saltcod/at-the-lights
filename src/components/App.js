import React, { Component } from "react";
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import base from "../base";
import Header from "../components/Header";

class App extends Component {
	state = {
		todos: [],
		url: ""
	};

	componentDidMount() {
		const { params } = this.props.match;
		this.ref = base.syncState(`${params.listId}/todos`, {
			context: this,
			state: "todos",
			asArray: true
		});
	}

	addTodo = todo => {
		todo.id = new Date().getTime();
		todo.complete = false;
		todo.backlog = false;
		let todos = { ...this.state.todos, todo };
		this.setState({ todos });
	};

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({ todos });
	};

	toggleBacklog = id => {
		const todos = this.state.todos;
		const currentTodo = todos.find(todo => todo.id === id);
		currentTodo.backlog = !currentTodo.backlog;
		currentTodo.complete = false;
		this.setState({ todos });
	};

	completeTodo = id => {
		const todos = this.state.todos;
		const currentTodo = todos.find(todo => todo.id === id);
		currentTodo.complete = !currentTodo.complete;
		this.setState({ todos });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<div className="content">
					<AddTodo addTodo={this.addTodo} />
					<h2>Todos</h2>
					<Todos
						todos={this.state.todos}
						toggleBacklog={this.toggleBacklog}
						deleteTodo={this.deleteTodo}
						completeTodo={this.completeTodo}
					/>
				</div>
			</div>
		);
	}
}

export default App;
