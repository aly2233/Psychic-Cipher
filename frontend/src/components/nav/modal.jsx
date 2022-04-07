import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal";
import SignupForm from "../session/signup_form";
import LoginForm from "../session/login_form";
import { login } from "../../actions/session_actions";
import { signup } from "../../actions/session_actions";
import { openModal } from "../../actions/modal";


const Modal = ({modal, closeModal, state, login, signup, openModal}) => {
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'login':
        component = <LoginForm closeModal={closeModal} login={login}  state={state}/>;
        break;
      case 'signup':
        component = <SignupForm openModal={openModal} login={login} closeModal={closeModal} signup={signup} state={state} />;
        break;
        default:
        return null;
    }
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
  
  const mapStateToProps = (state, ownProps) => {
    return {
      modal: state.modal,
      state: state

    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal()),
      login: user => dispatch(login(user)),
      signup: user => dispatch(signup(user))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Modal);