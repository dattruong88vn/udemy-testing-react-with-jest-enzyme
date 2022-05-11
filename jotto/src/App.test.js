
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

test('renders non-empty conponent without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
