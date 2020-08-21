import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import testDB from './firebase/test';


class App extends React.Component {
	constructor() {
		super();
		
		this.state = {
			currentUser: null
		}

	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		// executes on user login (state) detection (?)
		this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
			if(user) {
				const userRef = await createUserProfileDocument(user); 

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					}, () => console.log(this.state.currentUser));
				});
			}
			else {
				this.setState({ currentUser: user });
			}

		});
	}

	componentWillUnmount() {
		//close subscription
		this.unsubscribeFromAuth();
	}

	render() {
		// console.log(this.state.currentUser);
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
