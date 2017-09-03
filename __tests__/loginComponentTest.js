import {shallow} from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import "react-test-renderer";
import Login from "./../src/js/components/loginComponent";

describe("<Login />", () => {

  it("should render a form and submit buttons", () => {
    const wrapper = shallow(
      <Login />
    );
    expect(wrapper).toMatchSnapshot();
  });

});
