import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Signup from "./../components/signupComponent";

const mapStateToProps = (state) => {
  return {

  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
