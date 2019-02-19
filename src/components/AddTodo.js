import React from "react";

class AddTodo extends React.Component {
	state = {
		content: ""
	};
	handleChange = e => {
		this.setState({ content: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({ content: "" });
	};

	render() {
		return (
			<div>
				<form className="list-form" onSubmit={this.handleSubmit}>
					<label>
						Add to your list: <u>{this.props.listId}</u>
					</label>
					<input type="text" value={this.state.content} onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

export default AddTodo;
