import { View } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import connect from '../connect.js';

it('renders correctly', () => {

  const TestComponent = connect(Test);
  const testFn = jest.fn();
  const options = {context: {strings: {}, language: {subscribe: testFn}}};
  const wrapper = shallow(<TestComponent/>, options);

  expect(wrapper).toMatchSnapshot();

  expect(wrapper.props()).toEqual(options.context);

  //mock component did mount behaviour
  wrapper.instance().subscribe();

  expect(testFn).toHaveBeenCalled();
});


class Test extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <View/>;
  }
}
