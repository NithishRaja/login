import {shallow} from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import "react-test-renderer";
import Hello from "./../src/js/components/helloComponent";

describe("<Hello />", () => {

  it("should render a message and a button", () => {
    const wrapper = shallow(
      <Hello />
    );
    expect(wrapper).toMatchSnapshot();
  });

});
