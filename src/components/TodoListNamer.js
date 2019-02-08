import React from "react";
import { getFunName } from "../helpers";
import Header from "../components/Header";
class TodoListNamer extends React.Component {
	state = {
		url: "angry-hateful-lettuce"
	};
	myInput = React.createRef();

	goToList = e => {
		e.preventDefault();
		const listName = this.myInput.current.value;
		this.props.history.push(`/list/${listName}`);
	};

	updateUrlState = e => {
		this.setState({ url: e.target.value });
	};
	render() {
		return (
			<div>
				<Header />
				<div className="list-namer">
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
					<h3>Your list url is:</h3>
					http://at-the-lights.ca/{this.state.url}
				</div>
			</div>
		);
	}
}

export default TodoListNamer;
