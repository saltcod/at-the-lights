import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListNamer from "./ListNamer";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ListNamer} />
		</Switch>
	</BrowserRouter>
);
export default Router;
