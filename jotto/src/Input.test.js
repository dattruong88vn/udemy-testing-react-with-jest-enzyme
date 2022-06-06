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
    success: false,
    secretWord: "train"
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />)
}

describe("render", () => {
    let wrapper;

    // success false
    describe("rendes with success false", () => {

        beforeEach(() => {
            wrapper = setup({ success: false });
        })

        test("renders without error", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });

        test("input shows", () => {
            const inputComponent = findByTestAttr(wrapper, "input-box");
            expect(inputComponent.exists()).toBe(true);
        });

        test("submit btn shows", () => {
            const inputComponent = findByTestAttr(wrapper, "submit-button");
            expect(inputComponent.exists()).toBe(true);
        });
    });

    // success true
    describe("rendes with success true", () => {
        beforeEach(() => {
            wrapper = setup({ success: true });
        })

        test("component input do not show", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.exists()).toBe(false);
        });
    });
})

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






