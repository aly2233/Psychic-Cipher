
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

    this.props.login(user).then(() => {
      if (this.props.state.session.user.id) {
        this.props.closeModal();
      }
    })
    // if(this.props.state.session.user.id !== null) {
    //   this.props.closeModal()
    // }
 
  }

  componentDidUpdate() {
      if (this.state.email === 'FreeTarotReading@email.com' && this.state.password === 'password') {
              this.props.login({email: 'FreeTarotReading@email.com', password: 'password'})
                .then( () => this.props.state.session.user.id ? this.props.closeModal() : null)
      }
  }


  renderErrors() {
    return(
      <div className='errors-div'>
        {Object.keys(this.props.state.errors).map((error, i) => (
           ( <ul className='errors' key={`error-${i}`}>
           {this.props.state.errors[error]}
          </ul> )
        ))}
      </div>
    );
  }

  demoUserLogIn() {
    let demoInfo = {
      email: 'FreeTarotReading@email.com',
      password: 'password',
    }
    let fieldIndex = 0;
    let indexCount = 0;
    let currentInput = '';
    let currentField = Object.keys(demoInfo)[fieldIndex]

    let inputInterval = setInterval( () => {
        currentInput += demoInfo[currentField][indexCount]
        this.setState( {[currentField]: currentInput})
        indexCount++
        if( currentInput === demoInfo[currentField]) {
            if(fieldIndex === 1) {
                clearInterval(inputInterval)
            } else{
                currentInput = '';
                indexCount = 0;
                fieldIndex++;
                currentField = Object.keys(demoInfo)[fieldIndex]
            }
        }         
    },50)
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
            <input className='login-submit-button' type="submit" value="Submit" />
            <button className='login-submit-button' type="button" onClick={() => this.demoUserLogIn()}>Demo User Log In</button>
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