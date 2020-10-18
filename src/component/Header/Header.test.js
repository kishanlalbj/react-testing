import React from "react";

import { shallow } from "enzyme";

import Header from "./Header";
import { findByTestAttr } from "../../../utils/test";

const setUp = (props = {}) => shallow(<Header></Header>);

describe("Header", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUp();
	});
	test("should render without error", () => {
		const component = findByTestAttr(wrapper, "header");
		expect(component.length).toBe(1);
	});

	test("should render logo", () => {
		const logoComponent = findByTestAttr(wrapper, "logo");
		expect(logoComponent.length).toBe(1);
	});
});
