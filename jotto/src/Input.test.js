import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from "../test/testUtils"
import Input from "./Input"

// case destructuring useState in Input component
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const defaultProps = {
    secretWord: "train"
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />)
}

test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
});

test("does not throw warning with expected prop", () => {
    checkProps(Input, defaultProps)
})

describe("state control input field", () => {
    test("state update with value of input box onchange", () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = () => (["", mockSetCurrentGuess])
        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, "input-box");

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
})






