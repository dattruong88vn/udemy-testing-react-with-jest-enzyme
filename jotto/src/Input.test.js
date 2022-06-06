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
    let wrapper;
    let mockSetCurrentGuess = jest.fn();
    let originalUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear(); // clear value each time 
        originalUseState = React.useState;
        React.useState = () => (["", mockSetCurrentGuess])
        wrapper = setup();
    });

    afterEach(() => {
        React.useState = originalUseState; // set React.useState to default
    });

    test("state update with value of input box onchange", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

    test("field is clear upon submit button click", () => {
        const buttonSubmit = findByTestAttr(wrapper, "submit-button");
        const mockEvent = { preventDefault: () => { } };
        buttonSubmit.simulate("click", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
})






