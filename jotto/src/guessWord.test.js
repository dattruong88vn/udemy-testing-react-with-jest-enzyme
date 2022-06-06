import React from "react";
import { mount } from "enzyme";

import App from "./App";
import { findByTestAttr } from "../test/testUtils";

/**
 * Create wrapper with specified initial conditions
 * then submit a guessed word of "train"
 *
 * @function
 * @param {object} state - Initial conditions
 * @return {Wrapper} - Enzyme wrapper of mounted App component
 */

const setup = (state = {}) => {
  const wrapper = mount(<App />);

  // add value to input
  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "train" } });

  // click btn submit
  const submitBtn = findByTestAttr(wrapper, "submit-button");
  submitBtn.simulate("change", { preventDefault: () => {} });

  return wrapper;
};

describe.skip("no word guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });

  test("create guessedWords table with 1 row", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe.skip("some word guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "thanh", letterMatchCount: 2 },
  ];

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWords,
    });
  });

  test("create guessedWords table with rows", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(3);
  });
});

describe.skip("secret word guessed", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: true,
      guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
    });

    // add value to input
    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "party" } });

    // click btn submit
    const submitBtn = findByTestAttr(wrapper, "submit-button");
    submitBtn.simulate("change", { preventDefault: () => {} });
  });

  test("create guessedWords table with rows", () => {
    const guessedWordRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordRows).toHaveLength(3);
  });

  test("show message success", () => {
    const congratsMessage = findByTestAttr(wrapper, "congrats-message");
    expect(congratsMessage.text().length).not.toBe(0);
  });

  test("input component do no show", () => {
    const inputComponent = findByTestAttr(wrapper, "component-input");
    expect(inputComponent.exists()).toBe(false);
  });
});
