import { View } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

import connect from '../connect.js';
import LanguageProvider from '../LanguageProvider';

it('renders correctly', () => {

  const TestComponent = connect(Test);

  const strings = {test: 'Test'};

  const wrapper = shallow(<LanguageProvider strings={strings} language="en"><Test/></LanguageProvider>);

  expect(wrapper).toMatchSnapshot();

});


class Test extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <View/>;
  }
}
