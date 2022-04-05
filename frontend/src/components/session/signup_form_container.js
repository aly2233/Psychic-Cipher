import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    // signedIn: state.session.isSignedIn,
    // errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(signup)
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);