import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowComponent}
 * */
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test='${value}']`);

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test("counter display start at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("0");
});

test("click button increments counter display", () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, 'increment-button');

  // click the button
  button.simulate('click');

  // find the display, and test that number has been incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe("1");
});

test("render decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('render error', () => {
  const wrapper = setup();
  const error = findByTestAttr(wrapper, "error");
  expect(error.length).toBe(1);
})

test("render error start with empty string", () => {
  const wrapper = setup();
  const error = findByTestAttr(wrapper, "error").text();
  expect(error).toBe("");
})

test('click button decrements counter display', () => {
  const wrapper = setup();

  // find the button decrease
  const button = findByTestAttr(wrapper, "decrement-button");

  // get current value
  const currentValue = findByTestAttr(wrapper, 'count').text();

  // click 
  button.simulate('click');

  // check current value and test
  if (currentValue === "0") {
    const error = findByTestAttr(wrapper, 'error');
    expect(error.text()).toBe("The counter can't go below zero");
  } else {
    const nextValue = findByTestAttr(wrapper, 'count').text();
    expect(nextValue).toBe(currentValue - 1);
  }
})

test("increment to clear error", () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click
  button.simulate('click');

  // find the error and test
  const error = findByTestAttr(wrapper, 'error').text();
  expect(error).toBe("");
})
