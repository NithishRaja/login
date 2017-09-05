import React from "react";
import ReactDOM from "react-dom";
import "react-test-renderer";
import {shallow} from "enzyme";
import Signup from "./../src/js/components/signupComponent";

describe("<Signup />", () => {

  it("should render a form and submit buttons", () => {
    const wrapper = shallow(
      <Signup />
    );
    expect(wrapper).toMatchSnapshot();
  });

});
