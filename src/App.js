import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
	constructor() {
		super();
		
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={ HomePage } />
					
				</Switch>
			</div>
		);
	}

}

export default App;
