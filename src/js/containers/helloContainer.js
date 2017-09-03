import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import toggleMessage from "./../actions/toggleMessage";
import Hello from "./../components/helloComponent";

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleMessage}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Hello);
