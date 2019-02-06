import React from "react";
import { getFunName } from "./helpers";
class TodoListNamer extends React.Component {
	myInput = React.createRef();

	goToList = e => {
		e.preventDefault();
		const listName = this.myInput.current.value;
		this.props.history.push(`/list/${listName}`);
	};

	render() {
		return (
			<form onSubmit={this.goToList}>
				<h2>Please enter a name for your list!</h2>
				<input type="text" ref={this.myInput} required placeholder="List name" defaultValue={getFunName()} />
				<button type="submit">Start listin'!</button>
			</form>
		);
	}
}

export default TodoListNamer;
