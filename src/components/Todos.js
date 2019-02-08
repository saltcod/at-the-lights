import React from "react";
import sortBy from "lodash/sortBy";

const Todos = ({ todos, deleteTodo, completeTodo, toggleBacklog }) => {
	const sortedTodos = sortBy(todos, ["content"]);

	const toGetList = sortedTodos.length ? (
		sortedTodos.map(todo => {
			if (!todo.backlog) {
				return (
					<li className="todo" key={todo.id}>
						<label>
							<input type="checkbox" className="complete" onClick={() => completeTodo(todo.id)} />
							{todo.content}
						</label>

						<button
							className="backlog"
							onClick={() => {
								toggleBacklog(todo.id);
							}}
						>
							{" "}
							&times;
						</button>
					</li>
				);
			}
		})
	) : (
		<p>Add an item to get started</p>
	);

	const backlog = sortedTodos.length ? (
		sortedTodos.map(todo => {
			if (todo.backlog) {
				return (
					<li className="todo" key={todo.id}>
						<label>
							<input type="checkbox" className="complete" onClick={() => toggleBacklog(todo.id)} />
							{todo.content}
						</label>

						<button
							className="delete"
							onClick={() => {
								deleteTodo(todo.id);
							}}
						>
							{" "}
							&times;
						</button>
					</li>
				);
			}
		})
	) : (
		<p />
	);

	return (
		<div>
			<div className="to-get-list">
				<ul>{toGetList}</ul>
			</div>
			{backlog.length > 0 && (
				<div className="backlog">
					<h2>Backlog</h2>
					<ul>{backlog}</ul>
				</div>
			)}
		</div>
	);
};

export default Todos;
