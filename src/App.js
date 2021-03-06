import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {
	

	unsubscribeFromAuth = null;

	componentDidMount() {
		// executes on user login (state) detection (?)
		this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

			const {setCurrentUser} = this.props;

			if(user) {
				const userRef = await createUserProfileDocument(user); 

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						
						id: snapShot.id,
						...snapShot.data()
						
					});
				});
			}
			else {
				setCurrentUser( user );
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
				<Header/>
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route exact path='/shop' component={ ShopPage } />
					<Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndUpPage />) } />
				</Switch>
			</div>
		);
	}

}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
