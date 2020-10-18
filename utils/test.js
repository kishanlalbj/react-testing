import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, value) =>
	wrapper.find(`[data-test='${value}']`);

export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(
		component.propTypes,
		expectedProps,
		"props",
		component.name
	);
	return propsErr;
};
