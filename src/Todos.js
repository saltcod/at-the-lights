import React from "react";

const Todos = ({ todos, deleteTodo, completeTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div className="collection-item" key={todo.id}>
					<button className="complete" onClick={() => completeTodo(todo.id)}>
						o
					</button>

					<span>{todo.content}</span>

					<button
						className="delete"
						onClick={() => {
							deleteTodo(todo.id);
						}}
					>
						{" "}
						x
					</button>
				</div>
			);
		})
	) : (
		<p>No todos left</p>
	);

	return <div className="todos collection">{todoList}</div>;
};

export default Todos;
