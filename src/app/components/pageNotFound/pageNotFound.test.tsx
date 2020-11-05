import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

const title = 'Page Not Found';
let wrapped = shallow(<PageNotFound>{title}</PageNotFound>);

describe('PageNot Found', () => {
  it('renders the PageNot Found', () => { 
    expect(wrapped.find('div').text()).toEqual(title);
  });
});