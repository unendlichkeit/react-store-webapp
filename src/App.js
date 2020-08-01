import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			currentUser: null
		}

	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user }, () => console.log(user));
		});
	}

	componentWillUnmount() {
		//close subscription
		this.unsubscribeFromAuth();
	}

	render() {
		console.log(this.state.currentUser);
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route exact path='/shop' component={ ShopPage } />
					<Route exact path='/signin' component={ SignInAndUpPage } />
				</Switch>
			</div>
		);
	}

}

export default App;
