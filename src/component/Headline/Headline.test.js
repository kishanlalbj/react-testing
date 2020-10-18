import React from "react";
import { shallow } from "enzyme";

import Headline from "./Headline";
import { findByTestAttr, checkProps } from "../../../utils/test";

const setUp = (props = {}) => shallow(<Headline {...props}></Headline>);

describe("Headline Component", () => {
	describe("Check proptypes", () => {
		test("should not throw error", () => {
			const expectedProps = {
				header: "Post",
				desc: "desctiption",
			};

			const propsErr = checkProps(Headline, expectedProps);

			expect(propsErr).toBe(undefined);
		});
	});

	describe("with props", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp({ header: "Posts", desc: "Wow.." });
		});

		test("should render headline", () => {
			const component = findByTestAttr(wrapper, "headline");
			expect(component.length).toBe(1);
		});

		test("should render header wthout error", () => {
			const component = findByTestAttr(wrapper, "header");
			expect(component.length).toBe(1);
		});

		test("should render desc without error", () => {
			const component = findByTestAttr(wrapper, "desc");
			expect(component.length).toBe(1);
		});
	});

	describe("with NO props", () => {
		let wrapper;

		beforeEach(() => {
			wrapper = setUp({ header: null });
		});

		test("should not render headline", () => {
			const component = findByTestAttr(wrapper, "headline");
			expect(component.length).toBe(0);
		});

		test("should not render header", () => {
			const component = findByTestAttr(wrapper, "header");
			expect(component.length).toBe(0);
		});

		test("should not render desc", () => {
			const component = findByTestAttr(wrapper, "desc");
			expect(component.length).toBe(0);
		});
	});
});
