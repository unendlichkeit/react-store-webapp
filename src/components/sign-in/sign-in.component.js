import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomBtn from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        console.log( value, name );
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required='required' handleChange={this.handleChange} label='Your Email' />
                    
                    <FormInput name='password' type='password' value={this.state.password} required='required' handleChange={this.handleChange} label='Password' />

                    <div className='buttons'>
                        <CustomBtn type='submit' name='submit'> Log in </CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn='isGoogleSignIn'> Sign in with Google </CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;