import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";
import TodoListNamer from "../components/TodoListNamer";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={TodoListNamer} />
			<Route path="/list/:listId" component={App} />
		</Switch>
	</BrowserRouter>
);
export default Router;
