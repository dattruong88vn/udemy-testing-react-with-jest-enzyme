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
