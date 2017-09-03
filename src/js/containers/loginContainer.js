import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Login from "./../components/loginComponent";
import attemptLogin from "./../actions/attemptLogin";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    loginAttempt: state.loginAttempt
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({attemptLogin}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
