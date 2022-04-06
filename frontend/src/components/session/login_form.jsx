
import './login.css'
import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.props.state.errors = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
    // if(this.props.state.session.user.id !== null) {
    //   this.props.closeModal()
    // }
 
  }


  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.state.errors).map((error, i) => (
           ( <li className='errors' key={`error-${i}`}>
           {this.props.state.errors[error]}
          </li> )
        ))}
      </ul>
    );
  }



  render() {
    return (
   
      <div className='login-form-container'>
        <form className='login-form' onSubmit={this.handleSubmit}>
         {/* {this.renderErrors()} */}
          <div className='login-form-interior'>
              <input className='login-input' 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
                // required
              />
            <br/>
              <input className='login-input'
               type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                // required
              />
            <br/>
            <br />
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
        {/* {this.renderErrors()} */}
      </div>
    );
  }
}

// export default withRouter(LoginForm);
export default LoginForm