import React from 'react';
import { shallow } from 'enzyme';
import FooterComponent from './footer';

const title = 'All rights reserved © 2018-2020 Tv Show';
let wrapped = shallow(<FooterComponent>{title}</FooterComponent>);

describe('Reserved Content', () => {
  it('renders the Reserved Content children', () => { 
    expect(wrapped.find('footer').text()).toEqual(title);
  });
});