import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils"
import GuessedWord from "./GuessedWord";

const defaultProps = {
    guessedWords: [
        { guessedWord: "train", letterMatchCount: 3 }
    ]
}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWord {...setupProps} />)
}

test("render without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-guessed-word');
    expect(component.length).toBe(1);
})

test('does not throw warning with expected prop', () => {
    checkProps(GuessedWord, defaultProps);
})
