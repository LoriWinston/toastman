import React from 'react';
import { shallow } from 'enzyme';
import RequestForm from './RequestForm';

describe('RequestForm component', () => {
  it('renders the RequestForm', () => {
    const wrapper = shallow(<RequestForm url="address.com" body="words"  onChange={() => {}} onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
