import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { ViewerManager } from "./Viewers/ViewerManager/ViewerManager";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<ViewerManager />
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);