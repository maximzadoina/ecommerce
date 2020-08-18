import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

type MyProps = {  };
type MyState = { email:string,password:string };
class SignIn extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const{email,password}=this.state
    try{
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({ email: '', password: '' });
    }
    catch(error){
      console.log(error)
    }
  };

  handleChangePassword = event => {

    this.setState({ password:event.target.value });
    console.log(this.state.password)
  };
  handleChangeEmail = event => {

    this.setState({ email:event.target.value });
    console.log(this.state.email)
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChangeEmail}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChangePassword}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;