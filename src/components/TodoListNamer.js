import React from "react";
import { getFunName } from "../helpers";
import Header from "../components/Header";
class TodoListNamer extends React.Component {
	myInput = React.createRef();

	goToList = e => {
		e.preventDefault();
		const listName = this.myInput.current.value;
		this.props.history.push(`/list/${listName}`);
	};

	render() {
		return (
			<div>
				<Header />
				<div className="list-namer content">
					<h2 className="list-name-instruction">Here's the name of your list:</h2>
					<form onSubmit={this.goToList}>
						<input
							className="todo-picker-input"
							onChange={this.updateUrlState}
							type="text"
							ref={this.myInput}
							required
							placeholder="List name"
							defaultValue={getFunName()}
						/>
						<button type="submit">Go!</button>
					</form>
				</div>
			</div>
		);
	}
}

export default TodoListNamer;
