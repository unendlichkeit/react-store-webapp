import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import CustomBtn from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password != confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // const totObiectul = await auth.createUserWithEmailAndPassword(email, password);
            // console.log(totObiectul);
            await createUserProfileDocument( user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch ( error ) {
            console.error(error.message);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} label='Display name' handleChange={this.handleChange} required />
                    <FormInput type='email' name='email' value={email} label='Email' handleChange={this.handleChange} required />
                    <FormInput type='password' name='password' value={password} label='Password' handleChange={this.handleChange} required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm password' handleChange={this.handleChange} required />

                    <CustomBtn type='submit'> SIGN UP </CustomBtn>
                </form>
                
                
            </div>

        );
    }
};

export default SignUp;