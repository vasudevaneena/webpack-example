import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount } from "enzyme";
import Container from "../components/container/Container";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = mount(<Container />);
});

describe("Container snapshot", () => {
  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
