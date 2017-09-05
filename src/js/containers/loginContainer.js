import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Login from "./../components/loginComponent";
import attemptLogin from "./../actions/attemptLogin";
import attemptFacebookLogin from "./../actions/attemptFacebookLogin";

const mapStateToProps = (state) => {
  return {
    loginAttempt: state.loginAttempt
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({attemptLogin, attemptFacebookLogin}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
