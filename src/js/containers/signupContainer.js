import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Signup from "./../components/signupComponent";
import attemptSignup from "./../actions/attemptSignup";

const mapStateToProps = (state) => {
  return {
    signupAttempt: state.signupAttempt
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({attemptSignup}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
