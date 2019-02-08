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
							<input
								checked={todo.complete}
								type="checkbox"
								className="complete"
								onChange={() => completeTodo(todo.id)}
							/>
							<span />
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

	const backlogTodos = sortedTodos.filter(todo => todo.backlog);

	return (
		<div>
			<div className="to-get-list">
				<ul>{toGetList}</ul>
			</div>
			{backlogTodos.length > 0 && (
				<div className="backlog">
					<h2>Backlog</h2>
					<ul>
						{backlogTodos.map(todo => {
							return (
								<li className="todo" key={todo.id}>
									<label>
										<input
											checked={todo.complete}
											type="checkbox"
											className="complete"
											onChange={() => toggleBacklog(todo.id)}
										/>
										<span />
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
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Todos;
